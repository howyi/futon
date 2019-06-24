/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
var apiFutonGraphQLAPIIdOutput = process.env.API_FUTON_GRAPHQLAPIIDOUTPUT;

const dynamodb = new AWS.DynamoDB.DocumentClient();

const { WebClient } = require('@slack/web-api');

let workspaceTableName = 'Workspace-' + apiFutonGraphQLAPIIdOutput;
if(process.env.ENV && process.env.ENV !== "NONE") {
  workspaceTableName = workspaceTableName + '-' + process.env.ENV;
}

exports.handler = async function (event, context) { //eslint-disable-line
  console.log(event.arguments);
  let workspaceId = event.arguments.workspaceId;

  var params = {
    TableName: workspaceTableName,
    Key:{
      id: workspaceId
    }
  };

  console.log('qqqq');
  await dynamodb.get(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);

      let slack = new WebClient(data.Item.accessToken);

      const team = slack.team.info();
      const users = slack.users.list();
      const emoji = slack.emoji.list();

      const cache = {
        id: workspaceId,
        team,
        users,
        emoji
      };

      let updateParams = {
        TableName: workspaceTableName,
        Key:{
          id: workspaceId
        },
        Item: {cache}
      };

      console.log(cache);
      console.log(updateParams);

      dynamodb.put(updateParams);

      return cache;
    }
  });
};
