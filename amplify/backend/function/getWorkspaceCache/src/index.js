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

  const getParams = {
    TableName: workspaceTableName,
    Key:{
      id: workspaceId
    }
  };

  try {
    const data = await dynamodb.get(getParams).promise();

    let slack = new WebClient(data.Item.accessToken);

    const team = await slack.team.info();
    const users = await slack.users.list();
    const emoji = await slack.emoji.list();

    const cache = {team, users, emoji};

    let updateParams = {
      TableName: workspaceTableName,
      Key: {
        id: workspaceId
      },
      UpdateExpression: "set cache = :c",
      ExpressionAttributeValues:{
        ":c": JSON.stringify(cache),
      },
      ReturnValues:"UPDATED_NEW",
    };

    await dynamodb.update(updateParams).promise();

    return cache;
  } catch (e) {
    console.error(e);
  }
};
