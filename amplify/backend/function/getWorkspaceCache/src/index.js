/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const SSM = new AWS.SSM();
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
  console.log(params);

  let parameter = await SSM.getParameter({Name: "SlackToken"}).promise();
  let token = parameter.Parameter.Value;
  let slack = new WebClient(token);

  const res = await slack.team.info();
  console.log(res);

  console.log('qqqq');
  dynamodb.get(params, function(err, data) {
    console.log('fffff');
    if (err) {
      console.log(err);
    } else {
      console.log(data);

      // let slack = new WebClient(data.Item.token);
      //
      // (async () => {
      //   const res = await slack.team.info();
      //   console.log('INFO: ', res.ts);
      //   context.done(null, event.arguments.workspaceId);
      // })();
    }
    console.log('zzzzz');
  });
};
