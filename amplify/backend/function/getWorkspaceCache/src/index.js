/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

exports.handler = function (event, context) { //eslint-disable-line
  console.log(event.arguments);
  let workspaceId = event.arguments.workspaceId;

  context.done(null, event.arguments.workspaceId);
};
