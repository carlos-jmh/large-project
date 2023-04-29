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
const ddb = new AWS.DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (eventHandler) => {
    console.log(`EVENT: ${JSON.stringify(eventHandler)}`);

    let isDoneWithLinkedList = false;

    if (!eventHandler || !eventHandler.upcomingEventId || eventHandler.upcomingEventId === '') {
        console.log('Invalid event handler: ', eventHandler);
        throw new Error('Invalid event handler.');
    }
    
    const queryEventParam = {
        TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
        Key: {
            id: eventHandler.upcomingEventId
        },
    };

    try {
        const queryEventResponse = await ddb.get(queryEventParam).promise();
        const event = queryEventResponse.Item;

        if (!event) {
            throw new Error('Event not found.');
        }

        if (event.eventType !== 'TASK') {
            throw new Error('Event is not a task.');
        }

        const updateCurrentEventParams = {
            TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
            Key: {
                id: event.id
            },
            UpdateExpression: 'set completed = :isComplete',
            ExpressionAttributeValues: {
                ':isComplete': true
            },
        }

        try {
            await ddb.update(updateCurrentEventParams).promise();
        } catch (error) {
            console.log(error);
            throw new Error('Error updating event.');
        }

        const nextEventId = event.nextEventId;

        const updateEventHandlerParams = {
            TableName: process.env.API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME,
            Key: {
                id: eventHandler.id
            },
            UpdateExpression: 'set upcomingEventId = :nextId',
            ExpressionAttributeValues: {
                ':nextId': nextEventId
            },
        };

        try {
            await ddb.update(updateEventHandlerParams).promise();
        } catch (error) {
            console.log(error);
            throw new Error('Error updating event handler.');
        }

        if (!nextEventId || nextEventId === '') {
            isDoneWithLinkedList = true;
        }

    } catch (error) {
        console.log(error);
        throw new Error('Error querying event.');
    }

    return isDoneWithLinkedList;
};
