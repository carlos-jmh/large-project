/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME
	API_HOUSEHOLDAPP_USERPROFILETABLE_ARN
	API_HOUSEHOLDAPP_USERPROFILETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const {	CognitoIdentityProviderClient, AdminGetUserCommand } = require("@aws-sdk/client-cognito-identity-provider");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const { cognitoUsername, houseHoldID } = event.arguments;
    // const identity = event.identity;
    // const ownerID = `${identity.sub}`;
	const houseHoldMemberID = uuidv4();
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
	const date = new Date();
	const createdAt = date.toISOString();
	const lastChangedAt = date.getTime();

	// Initiate client with config
	const client = new CognitoIdentityProviderClient({ region: process.env.REGION });
	const cognitoParams = {
		Username: cognitoUsername,
		UserPoolId: "us-east-2_tWMEujtTQ"
	}
	const command = new AdminGetUserCommand(cognitoParams);

	// Check if user exists
	try {
		const data = await client.send(command);
		console.log(data);
		console.log("Successfully found user");
	}
	catch (error) {
		console.log(error);
		console.log("Failed to find user");
	}

    // Create a new HouseHoldMember
	try {
		await dynamoDb
			.put({
				TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME,
				Item: {
					id: houseHoldMemberID,
					householdID: houseHoldID,
					userprofileID,
					points: 0,
					owner: ownerID,
					createdAt,
					updatedAt: createdAt,

					__typename: 'HouseHoldMember',
					_lastChangedAt: lastChangedAt,
					_version: 1,
				},
			})
			.promise();
	} catch (error) {
		console.log(error);
		return new Error('Error creating HouseHoldMember');
	}

    // Print all event data to console
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return houseHoldMemberID;
};
