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

Amplify Params - DO NOT EDIT */

var environment = process.env.ENV;

const querystring = require('querystring');

const { WebClient } = require('@slack/web-api');

const AWS = require('aws-sdk');
const SSM = new AWS.SSM();
const dynamodb = new AWS.DynamoDB.DocumentClient();

var express = require('express');
var bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

var apiFutonGraphQLAPIIdOutput = process.env.API_FUTON_GRAPHQLAPIIDOUTPUT;
let workspaceTableName = 'Workspace-' + apiFutonGraphQLAPIIdOutput;
if(process.env.ENV && process.env.ENV !== "NONE") {
    workspaceTableName = workspaceTableName + '-' + process.env.ENV;
}

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});

app.get('/slack-authorize/callback', async function(req, res) {
    if ("error" in req.query && req.query.error === 'access_denied') {
        const query = querystring.stringify({state: 'canceled'});
        return res.redirect(req.query.state + '?' + query);
    }

    const slack = new WebClient();

    const code = req.query.code;
    const parameters = (await SSM.getParameters({Names: ['FutonSlackClientId', 'FutonSlackClientSecret']}).promise()).Parameters;
    const client_id = parameters[0].Value;
    const client_secret = parameters[1].Value;

    let redirect_uri = req.protocol + '://' + req.hostname;
    if (environment !== '') {
        redirect_uri += '/' + environment
    }
    redirect_uri += '/slack-authorize/callback';

    const slackData = await slack.oauth.access({
        client_id: client_id,
        client_secret: client_secret,
        code: code,
        redirect_uri: redirect_uri
    });

    const now = (new Date()).toISOString();

    let putWorkspaceItemParams = {
        TableName: workspaceTableName,
        Item: {
            id: slackData.team_id,
            accessToken: slackData.access_token,
            scope: slackData.scope,
            botUserId: slackData.bot.bot_user_id,
            botAccessToken: slackData.bot.bot_access_token,
            createdAt: now
        }
    };

    console.log(putWorkspaceItemParams);

    await dynamodb.put(putWorkspaceItemParams).promise().catch((err) => {
        res.statusCode = 500;
        return res.json({error: err, url: req.url, body: req.body});
    });

    const query = querystring.stringify({state: 'added'});
    return res.redirect(req.query.state + '?' + query);
});

app.get('/slack-authorize', async function(req, res) {
  let redirect_uri = req.protocol + '://' + req.hostname;
  if (environment !== '') {
      redirect_uri += '/' + environment
  }
  redirect_uri += '/slack-authorize/callback';

  const client_id = (await SSM.getParameter({Name: 'FutonSlackClientId'}).promise()).Parameter.Value;
  const url = 'https://slack.com/oauth/authorize';
  const query = querystring.stringify({
      client_id: client_id,
      scope: [
          'channels:read',
          'channels:history',
          'groups:history',
          'mpim:history',
          'dnd:read',
          'team:read',
          'emoji:read',
          'files:read',
          'groups:read',
          'im:read',
          'im:history',
          'links:read',
          'pins:read',
          'reactions:read',
          'stars:read',
          'usergroups:read',
          'users:read',
          'commands',
          'bot',
      ],
      redirect_uri: redirect_uri,
      state: req.query.state
  });

  res.redirect(url + '?' + query)
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
