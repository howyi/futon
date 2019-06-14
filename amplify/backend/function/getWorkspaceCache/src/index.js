/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
var apiFutonGraphQLAPIIdOutput = process.env.API_FUTON_GRAPHQLAPIIDOUTPUT;

const dynamodb = new AWS.DynamoDB.DocumentClient();

let workspaceTableName = 'Workspace-' + apiFutonGraphQLAPIIdOutput;
if(process.env.ENV && process.env.ENV !== "NONE") {
  workspaceTableName = workspaceTableName + '-' + process.env.ENV;
}

exports.handler = function (event, context) { //eslint-disable-line
  console.log(event.arguments);
  let workspaceId = event.arguments.workspaceId;

  var params = {
    TableName: workspaceTableName,
    Key:{
      id: workspaceId
    }
  };
  console.log(params);

  dynamodb.get(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
    context.done(null, event.arguments.workspaceId);
  });
};
