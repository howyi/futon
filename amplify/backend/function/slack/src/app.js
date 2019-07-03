/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiFutonGraphQLAPIIdOutput = process.env.API_FUTON_GRAPHQLAPIIDOUTPUT

Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
var bodyParser = require('body-parser');
var express = require('express');

const uuidV4 = require('uuid/v4');

var apiFutonGraphQLAPIIdOutput = process.env.API_FUTON_GRAPHQLAPIIDOUTPUT;

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let workspaceTableName = 'Workspace-' + apiFutonGraphQLAPIIdOutput;
let rankTableName = 'Rank-' + apiFutonGraphQLAPIIdOutput;
if(process.env.ENV && process.env.ENV !== "NONE") {
  workspaceTableName = workspaceTableName + '-' + process.env.ENV;
  rankTableName = rankTableName + '-' + process.env.ENV;
}

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.post('/slack/action-endpoint', async function(req, res) {
  if ("challenge" in req.body) {
    return res.json({challenge: req.body.challenge})
  }

  if (!("team_id" in req.body && "token" in req.body)) {
    return res.json({success: false});
  }

  try {
    const workspace = (await dynamodb.get({
      TableName: workspaceTableName,
      Key:{
        id: req.body.team_id
      }
    }).promise());

    if (!("Item" in workspace)) {
      return res.json({success: false});
    }

    let event = req.body.event;
    switch(event.type) {
      case "reaction_added":
        await updateRank(
            workspace,
            event.reaction,
            event.item_user,
            +1
        );
        break;
      case "reaction_removed":
        await updateRank(
            workspace,
            event.reaction,
            event.item_user,
            -1
        );
        break;
    }
  } catch (e) {
    console.error(e);
  }
});

async function updateRank(workspace, reaction, user_id, delta) {
  if (reaction !== 'pear') {
    console.log('NOT PEAR');
    return;
  }

  const getParams = {
    TableName: rankTableName,
    Key:{
      id: workspace.Item.id + '/' + user_id
    }
  };

  const rank = await dynamodb.get(getParams).promise();

  console.log('aaa');
  console.log(rank);
  // TODO 定期的なキャッシュ更新

  if (!("Item" in rank)) {
    let purRankIncItemParams = {
      TableName: rankTableName,
      Item: {
        id: workspace.Item.id + '/' + user_id,
        workspaceId: workspace.Item.id,
        userId: user_id,
        count: delta,
      }
    };
    await dynamodb.put(purRankIncItemParams).promise();
  } else {
    let updateParams = {
      TableName: rankTableName,
      Key: {
        "id": workspace.Item.id + '/' + user_id
      },
      UpdateExpression: `set #cnt = #cnt + (:val)`,
      ExpressionAttributeNames: {
        "#cnt": "count"
      },
      ExpressionAttributeValues: {
        ":val": delta
      },
      ReturnValues: "UPDATED_NEW"
    };
    console.log(updateParams);
    await dynamodb.update(updateParams).promise();
  }
}

app.post('/slack/options-load-endpoint', function(req, res) {
  if ("challenge" in req.body) {
    res.json({challenge: req.body.challenge})
  }
  res.json({load: true})
});

app.post('/slack/command', function(req, res) {
  if ("challenge" in req.body) {
    res.json({challenge: req.body.challenge})
  }
  res.json({load: true})
});

app.listen(3000, function() {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
