/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_CALENDARTABLE_ARN
	API_HOUSEHOLDAPP_CALENDARTABLE_NAME
	API_HOUSEHOLDAPP_CHATROOMTABLE_ARN
	API_HOUSEHOLDAPP_CHATROOMTABLE_NAME
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

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
	const { houseHoldName } = event.arguments;
	const identity = event.identity;
	const ownerId = `${identity.sub}`;

	// generate IDs
	const houseHoldId = uuidv4();
	const houseHoldMemberId = uuidv4();
	const calendarId = uuidv4();
	const chatRoomId = uuidv4();

	// get current date
	const date = new Date();
	const createdAt = date.toISOString();
	const lastChangedAt = date.getTime();

	const dynamoDb = new AWS.DynamoDB.DocumentClient();

	// validate userProfile
	const userProfile = await retrieveUserProfile(dynamoDb, ownerId);
	if (!userProfile) {
		return new Error('Error retrieving userProfile');
	}

	// create new houseHoldmember
	try {
		await dynamoDb
			.put({
				TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME,
				Item: {
					id: houseHoldMemberId,
					points: 0,
					owner: ownerId,
					nickname: userProfile.nickname,
					userProfileId: userProfile.id,
					houseHoldId: houseHoldId,
					
					createdAt: createdAt,
					updatedAt: createdAt,

					__typename: 'HouseHoldMember',
					_lastChangedAt: lastChangedAt,
					_version: 1,
				},
			})
			.promise();
	} catch (error) {
		console.log(error);
		return new Error('Error creating houseHoldMember');
	}

	// create new chatRoom
	try {
		await dynamoDb
			.put({
				TableName: process.env.API_HOUSEHOLDAPP_CHATROOMTABLE_NAME,
				Item: {
					id: chatRoomId,
					houseHoldId: houseHoldId,

					createdAt: createdAt,
					updatedAt: createdAt,

					__typename: 'ChatRoom',
					_lastChangedAt: lastChangedAt,
					_version: 1,
				},
			})
			.promise();
	} catch (error) {
		console.log(error);
		return new Error('Error creating chatRoom');
	}

	// create new calendar
	try {
		await dynamoDb
			.put({
				TableName: process.env.API_HOUSEHOLDAPP_CALENDARTABLE_NAME,
				Item: {
					id: calendarId,
					houseHoldId: houseHoldId,

					createdAt: createdAt,
					updatedAt: createdAt,

					__typename: 'Calendar',
					_lastChangedAt: lastChangedAt,
					_version: 1,
				},
			})
			.promise();
	} catch (error) {
		console.log(error);
		return new Error('Error creating calendar');
	}

	// create new houseHold
	try {
		await dynamoDb
			.put({
				TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME,
				Item: {
					id: houseHoldId,
					name: houseHoldName,
					owners: [ownerId],
					chatRoomId: chatRoomId,
					calendarId: calendarId,
					createdAt: createdAt,
					updatedAt: createdAt,

					__typename: 'HouseHold',
					_lastChangedAt: lastChangedAt,
					_version: 1,
				},
			})
			.promise();
	} catch (error) {
		console.log(error);
		return new Error('Error creating houseHold');
	}

	return houseHoldId;
};

async function retrieveUserProfile(dynamoDb, sub) {
	// get userProfile (there is an index called byOwner)
	const params = {
		TableName: process.env.API_HOUSEHOLDAPP_USERPROFILETABLE_NAME,
		IndexName: 'byOwner',
		KeyConditionExpression: 'owner = :owner',
		ExpressionAttributeValues: {
			':owner': sub,
		},
	};
	
	try {
		const userProfile = await dynamoDb.query(params).promise();
		return userProfile.Items[0];
	} catch (error) {
		console.log(error);
		return null;
	}
}
