const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();

exports.signupLinkToDBHandler = async (event, context, callback) => {
  var params = {
    TableName: "user",
    Item: {
      User_ID: event.userName,
    },
  };
  const result = await docClient.put(params).promise();
  console.log(
    `cognito user link to dynamodb id=${event.userName} result=${result}`
  );
  callback(null, event);
};
