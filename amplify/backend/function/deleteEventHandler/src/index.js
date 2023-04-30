/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_EVENTHANDLERTABLE_ARN
	API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME
	API_HOUSEHOLDAPP_EVENTTABLE_ARN
	API_HOUSEHOLDAPP_EVENTTABLE_NAME
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const { eventHandlerId } = event.arguments;
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const MAX_BATCH_WRITE_REQUESTS = 25;
	let numEvents = 0;
	
	console.log(`EVENT: ${JSON.stringify(event)}`);
	
    // Query for all events containing the eventHandlerId
	const queryParams = {
		TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
		IndexName: "byEventHandler",
		KeyConditionExpression: "#eventHandlerId = :inputEventHandlerId",
		ExpressionAttributeValues: {
			":inputEventHandlerId": eventHandlerId
		},
		ExpressionAttributeNames: {
			"#eventHandlerId" : "eventHandlerId"
		},
		ProjectionExpression: "id"
	};

	// Create delete requests for batch write
	const promises = [];
	try {
		const data = await dynamoDb.query(queryParams).promise();
		numEvents = data.Items.length;
		// Throw error if no events with the eventHandlerId exist.
		// Never really throws an error, since the authorizer will throw an error
		// before even executing this function if the eventHandlerId is truly invalid,
		// as a valid eventHandlerId is required to confirm the identity of the user
		// calling the function.
		if (!numEvents) throw new Error("Invalid eventHandlerId/Cannot find events.");
		
		// Generate all of the batchWrite promises
		let deleteRequests = [];
		for (let i = 0; i < data.Items.length; i++) {
			if (i != 0 && i % MAX_BATCH_WRITE_REQUESTS == 0) {
				promises.push(dynamoDb.batchWrite(genDeleteParams(deleteRequests)).promise());
				deleteRequests = []; // reset array
			}
			deleteRequests.push(genDeleteRequest(data.Items[i].id));
		}
		
		// Push final remaining batch write promise
		if (deleteRequests.length)
			promises.push(dynamoDb.batchWrite(genDeleteParams(deleteRequests)).promise());

	} catch (error) {
		console.log(error)
		throw error;
	}

	// Delete all events with eventHandlerId from the Events table
	try {
		await Promise.all(promises);
	} catch (error) {
		console.log(error);
		throw error;
	}

	// Delete the EventHandler item itself
	const deleteParams = {
		TableName: process.env.API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME,
		Key: {
			id: eventHandlerId,
		}
	};

	try {
		await dynamoDb.delete(deleteParams).promise();
	} catch (error) {
		console.log(error);
		throw error;
	}
	
	return `Successfully deleted ${numEvents} event(s).`;
};

const genDeleteParams = (deleteRequests) => {
	const deleteParams = {
		RequestItems: {
			[process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME]: deleteRequests,
		}
	}
	return deleteParams;
}

const genDeleteRequest = (eventId) => {
	return {
		DeleteRequest: {
            Key: { "id" : eventId }
        }
	}
}