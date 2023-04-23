/* Amplify Params - DO NOT EDIT
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
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const { eventId } = event.arguments;
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    let prevEventId, nextEventId;

    // Retrieve event and grab its previous/next event ids, if they exist
    const getParams = {
        TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
        Key: {
            id: eventId,
        }
    }

    try {
        const data = await dynamoDb.get(getParams).promise();
        // Throw error if the Event does not exist
        if (!data.Item) throw new Error("Invalid EventId.");
        prevEventId = data.Item.prevEventId;
        nextEventId = data.Item.nextEventId;
    } catch (error) {
        console.log(error);
        throw error;
    }

    // Resolve "gap" between events
    if (prevEventId) {
        const updateParams = {
            TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
            Key: { id : prevEventId },
            UpdateExpression: 'set nextEventId = :nextId',
            ExpressionAttributeValues: { ':nextId' : nextEventId },
        }

        try {
            await dynamoDb.update(updateParams).promise();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    if (nextEventId) {
        const updateParams = {
            TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
            Key: { id : nextEventId },
            UpdateExpression: 'set prevEventId = :prevId',
            ExpressionAttributeValues: { ':prevId' : prevEventId },
        }

        try {
            await dynamoDb.update(updateParams).promise();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // Delete the event
    const deleteParams = {
        TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
        Key: {
            id: eventId,
        }
    }

    try {
        await dynamoDb.delete(deleteParams).promise();
    } catch (error) {
        console.log(error);
        throw error;
    }

    return "Successfully deleted event.";
};
