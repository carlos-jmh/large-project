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
	const { userprofileID, houseHoldName } = event.arguments;
	const identity = event.identity;
	const ownerID = `${identity.sub}`;

	// generate IDs
	const houseHoldID = uuidv4();
	const houseHoldMemberID = uuidv4();
	const calendarID = uuidv4();
	const chatRoomID = uuidv4();

	// get current date
	const date = new Date();
	const createdAt = date.toISOString();
	const lastChangedAt = date.getTime();

	const dynamoDb = new AWS.DynamoDB.DocumentClient();

	// validate userprofileID
	try {
		const userProfile = await dynamoDb
			.get({
				TableName: process.env.API_HOUSEHOLDAPP_USERPROFILETABLE_NAME,
				Key: {
					id: userprofileID,
				},
			})
			.promise();

		if (!userProfile.Item) {
			return new Error('Invalid userprofileID');
		}
	} catch (error) {
		console.log(error);
		return new Error('Invalid userprofileID');
	}

	// create new houseHoldmember
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
		return new Error('Error creating houseHoldMember');
	}

	// create new chatRoom
	try {
		await dynamoDb
			.put({
				TableName: process.env.API_HOUSEHOLDAPP_CHATROOMTABLE_NAME,
				Item: {
					id: chatRoomID,
					householdID: houseHoldID,
					owners: [ownerID],
					createdAt,
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
					id: calendarID,
					householdID: houseHoldID,
					owners: [ownerID],
					createdAt,
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
					id: houseHoldID,
					name: houseHoldName,
					owners: [ownerID],
					chatRoomID,
					calendarID,
					createdAt,
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

	return houseHoldID;
};
