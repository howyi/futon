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
let eventTableName = 'Event-' + apiFutonGraphQLAPIIdOutput;
let rankTableName = 'Rank-' + apiFutonGraphQLAPIIdOutput;
if(process.env.ENV && process.env.ENV !== "NONE") {
  workspaceTableName = workspaceTableName + '-' + process.env.ENV;
  eventTableName = eventTableName + '-' + process.env.ENV;
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

  let team_id = req.body.team_id;

  const response = (await dynamodb.get({
    TableName: workspaceTableName,
    Key:{
      id: team_id
    }
  }).promise());

  console.log(response);
  console.log(response.Item);

  let now = (new Date()).toISOString();

  let event = req.body.event;
  let reaction = {};
  switch(event.type) {
    case "reaction_added":

      var params = {
        TableName: rankTableName,
        Key:{
          id: team_id + '/' + event.item_user
        }
      };
      reaction = event.reaction;
      dynamodb.get(params, function(err, data){
        if(err){
          console.log(err);
        } else {
          let reactions = {
            [reaction]: 0
          };
          console.log(reactions);
          if ("Item" in data) {
            reactions = data.Item.reactions;
            if (reactions[reaction] === undefined) {
              reactions[reaction] = 0;
            }
          }
          reactions[reaction] = reactions[reaction] + 1;

          let purRankIncItemParams = {
            TableName: rankTableName,
            Item: {
              id: team_id + '/' + event.item_user,
              workspaceId: req.body.team_id,
              reactions: reactions,
              createdAt: now
            }
          };

          dynamodb.put(purRankIncItemParams, (err, data) => {
            if(err) {
              res.statusCode = 500;
              return res.json({error: err, url: req.url, body: req.body});
            }
          });
        }
      });
      break;
    case "reaction_removed":
      var params = {
        TableName: rankTableName,
        Key:{
          id: team_id + '/' + event.item_user
        }
      };
      reaction = event.reaction;
      dynamodb.get(params, function(err, data){
        if(err){
          console.log(err);
        } else {
          let reactions = {
            [reaction]: 0
          };
          console.log(reactions);
          if ("Item" in data) {
            reactions = data.Item.reactions;
            if (reactions[reaction] === undefined) {
              reactions[reaction] = 0;
            }
          }
          reactions[reaction] = reactions[reaction] - 1;

          let purRankIncItemParams = {
            TableName: rankTableName,
            Item: {
              id: team_id + '/' + event.item_user,
              workspaceId: req.body.team_id,
              reactions: reactions,
              createdAt: now
            }
          };

          dynamodb.put(purRankIncItemParams, (err, data) => {
            if(err) {
              res.statusCode = 500;
              return res.json({error: err, url: req.url, body: req.body});
            }
          });
        }
      });
      break;
  }

  let putEventItemParams = {
    TableName: eventTableName,
    Item: {
      id: uuidV4(),
      workspaceId: req.body.team_id,
      raw: (req.body),
      createdAt: now
    }
  };

  dynamodb.put(putEventItemParams, (err, data) => {
    if(err) {
      res.statusCode = 500;
      console.log(err);
      return res.json({error: err, url: req.url, body: req.body});
    } else {
      return res.json({success: true})
    }
  });
});

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
