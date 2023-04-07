/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME
	API_HOUSEHOLDAPP_USERPROFILETABLE_ARN
	API_HOUSEHOLDAPP_USERPROFILETABLE_NAME
	AUTH_LARGEPROJECT9E7232C0_USERPOOLID
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
    const { cognitoUsername, houseHoldId } = event.arguments;
	const houseHoldMemberId = uuidv4();
	let ownerId, userProfileId;
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
	const date = new Date();
	const createdAt = date.toISOString();
	const lastChangedAt = date.getTime();

	// Initiate client with config
	const client = new CognitoIdentityProviderClient({ region: process.env.REGION });
	const cognitoParams = {
		Username: cognitoUsername,
		UserPoolId: process.env.AUTH_LARGEPROJECT9E7232C0_USERPOOLID
	};
	const command = new AdminGetUserCommand(cognitoParams);

	// Check if user exists
	try {
		const data = await client.send(command);
		ownerId = data.UserAttributes.find(attr => attr.Name == 'sub').Value; // Store sub
	}
	catch (error) {
		console.log(error);
		return error;
	}
	
	// Get userProfileId from existing user profile using ownerId
	const queryParams = {
		TableName: process.env.API_HOUSEHOLDAPP_USERPROFILETABLE_NAME,
		IndexName: "byOwner",
		KeyConditionExpression: "#owner_id = :user_sub",
		ExpressionAttributeValues: {
			":user_sub": ownerId
		},
		ExpressionAttributeNames: {
			"#owner_id" : "owner"
		},
		ProjectionExpression: "id"
	};

	// Try getting userProfileId
	try {
		const data = await dynamoDb.query(queryParams).promise();
		// Throw error if User Profile does not exist
		if (!data.Items.length) throw new Error("User profile does not exist.");
		userProfileId = data.Items[0].id;
	} catch (error) {
		console.log(error)
		return error;
	}

	// Get HouseHold and check if user is already within the owners array.
	// If not, add user to owners array.
	const getParams = {
		TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME,
		Key: {
			id: houseHoldId,
		},
	};

	try {
		const data = await dynamoDb.get(getParams).promise();
		// Check if household does not exist.
		if (!Object.keys(data).length) throw new Error("Invalid HouseHoldId.");
		// Check if user is already a member of the household. If so, throw an error.
		if (data.Item.owners.includes(ownerId)) throw new Error("User is already a member of the household.");
		// Add user to the household.
		try {
			await updateOwners(dynamoDb, ownerId, houseHoldId);
		}
		catch (error) {
			return error;
		};
	} catch (error) {
		console.log(error)
		return error;
	}

    // Create a new HouseHoldMember
	try {
		await dynamoDb
			.put({
				TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME,
				Item: {
					id: houseHoldMemberId,
					houseHoldId: houseHoldId,
					userProfileId,
					points: 0,
					owner: ownerId,
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
    return houseHoldMemberId;
};

// Helper Function to add user to household's owners field
const updateOwners = async (dynamoDb, ownerId, houseHoldId) => {
	const updateParams = {
		TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME,
		Key: {
			id: houseHoldId,
		},
		UpdateExpression: "set #owners = list_append(if_not_exists(#owners, :empty_list), :new_owner)",
		ExpressionAttributeNames: {
			"#owners": "owners",
		},
		ExpressionAttributeValues: {
			":new_owner": [ownerId],
			":empty_list": [],
		}
	};

	try {
		await dynamoDb.update(updateParams).promise();
	} catch (error) {
		console.log(error);
		return error;
	}
}
