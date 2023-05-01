/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_CHATROOMTABLE_ARN
	API_HOUSEHOLDAPP_CHATROOMTABLE_NAME
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME
	API_HOUSEHOLDAPP_MESSAGETABLE_ARN
	API_HOUSEHOLDAPP_MESSAGETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
// create new session of dynamoDB
const ddb = new AWS.DynamoDB.DocumentClient();

const { v4: uuidv4 } = require('uuid');
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	const { message, chatRoomId } = event.arguments;
	//const sub = event.identity;
	const identity = event.identity;
	// get sub
	const ownerId = `${identity.sub}`;
	const messageId = uuidv4();
	const date = new Date();
	const createdAt = date.toISOString();
	const lastChangedAt = date.getTime();


	// query a household and look for houseHold ID
	const chatQuery = {
		TableName: process.env.API_HOUSEHOLDAPP_CHATROOMTABLE_NAME,
		Key: {
			id: chatRoomId
		}
	}
	try {
		const houseHoldData = await ddb.get(chatQuery).promise();
		var house = houseHoldData.Item.houseHoldId;

	}
	catch (error) {
		console.log(error)
		return new Error('Error querying chatroom table')
	}


	const memberQueryParams = {
		TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME,
		KeyConditionExpression: '#y = :sub_id', // owner must also must match, in the table 'owner' is sub
		ExpressionAttributeValues: {
			':house_id': house,
			':sub_id': ownerId
		},
		ExpressionAttributeNames: {
			'#x': 'houseHoldId',
			'#y': 'owner'
		},
		FilterExpression: "#x = :house_id AND #y = :sub_id"



	};
	try {
		const memberData = await ddb.scan(memberQueryParams).promise();
		var houseMemberId = memberData.Items[0].id;

	}
	catch (error) {
		console.log(error)
		return new Error('Error querying member table')
	}



	const messagePut = {
		TableName: process.env.API_HOUSEHOLDAPP_MESSAGETABLE_NAME,
		//Key: { 'houseHoldId': house },
		Item: {
			'id': messageId,
			'message': message,
			'authorHouseHoldMemberId': houseMemberId,
			'chatRoomId': chatRoomId,
			createdAt: createdAt,
			updatedAt: createdAt,
			lastChangedAt: lastChangedAt,
			__typename: 'Message',
			_version: 1,
		},

	};
	try {
		await ddb.put(messagePut).promise();
	}
	catch (error) {
		console.log(error)
		return new Error('Error adding message')
	}



	return messageId;

};
