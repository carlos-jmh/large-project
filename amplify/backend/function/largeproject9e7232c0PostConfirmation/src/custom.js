const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  if (!event.request.userAttributes.email) {
    throw new Error("No user email received from Cognito");
  }

  const { sub } = event.request.userAttributes;
  const preferredName = event.userName || "HouseHold User";

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  //TODO: Check if user already has a profile (whenever user deletion is allowed in the app)

  await createUserProfile(dynamoDb, sub, preferredName);
};

async function createUserProfile(dynamoDb, sub, preferredName) {
  const createdAt = new Date().toISOString();
  const lastChangedAt = new Date().getTime();

  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_USERPROFILETABLE_NAME,
    Item: {
      id: uuidv4(),
      owner: sub,
      preferredName,
      createdAt,
      updatedAt: createdAt,
      _lastChangedAt: lastChangedAt,
      _version: 1,
      __typename: "UserProfile",
    },
  };

  try {
    await dynamoDb.put(params).promise();
  } catch (error) {
    console.log(error);
    throw new Error("Error creating UserProfile");
  }
}
