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
    const { cognitoUsername, houseHoldID } = event.arguments;
	const houseHoldMemberID = uuidv4();
	let ownerID, userprofileID;
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
		ownerID = data.UserAttributes.find(attr => attr.Name == 'sub').Value; // Store sub
	}
	catch (error) {
		console.log(error);
		return error;
	}
	
	// Get userprofileID from existing user profile using ownerID
	const queryParams = {
		TableName: process.env.API_HOUSEHOLDAPP_USERPROFILETABLE_NAME,
		IndexName: "byOwner",
		KeyConditionExpression: "#owner_id = :user_sub",
		ExpressionAttributeValues: {
			":user_sub": ownerID
		},
		ExpressionAttributeNames: {
			"#owner_id" : "owner"
		},
		ProjectionExpression: "id"
	};

	// Try getting userprofileID
	try {
		const data = await dynamoDb.query(queryParams).promise();
		// Throw error if User Profile does not exist
		if (!data.Items.length) throw new Error("Invalid UserProfileID.");
		userprofileID = data.Items[0].id;
	} catch (error) {
		console.log(error)
		return error;
	}

	// Get HouseHold and check if user is already within the owners array.
	// If not, add user to owners array.
	const getParams = {
		TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME,
		Key: {
			id: houseHoldID,
		},
	};

	try {
		const data = await dynamoDb.get(getParams).promise();
		// Check if household does not exist.
		if (!Object.keys(data).length) throw new Error("Invalid HouseHoldID.");
		// Check if user is already a member of the household. If so, throw an error.
		if (data.Item.owners.includes(ownerID)) throw new Error("User is already a member of the household.");
		// Add user to the household.
		try {
			await updateOwners(dynamoDb, ownerID, houseHoldID);
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

// Helper Function to add user to household's owners field
const updateOwners = async (dynamoDb, ownerID, houseHoldID) => {
	const updateParams = {
		TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME,
		Key: {
			id: houseHoldID,
		},
		UpdateExpression: "set #owners = list_append(if_not_exists(#owners, :empty_list), :new_owner)",
		ExpressionAttributeNames: {
			"#owners": "owners",
		},
		ExpressionAttributeValues: {
			":new_owner": [ownerID],
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