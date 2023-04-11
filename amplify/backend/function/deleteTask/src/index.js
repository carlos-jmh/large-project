/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	API_HOUSEHOLDAPP_TASKTABLE_ARN
	API_HOUSEHOLDAPP_TASKTABLE_NAME
	ENV
	FUNCTION_DELETEEVENTHANDLER_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({
    region: process.env.REGION
});

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const { taskId } = event.arguments;
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    let eventHandlerId;
    console.log(`EVENT: ${JSON.stringify(event)}`);

    // Check if input TaskId points to an existing Task, and if so, retrieve the eventHandlerId
    const getParams = {
        TableName: process.env.API_HOUSEHOLDAPP_TASKTABLE_NAME,
        Key: {
            id: taskId,
        }
    }

    try {
		const data = await dynamoDb.get(getParams).promise();
		if (!data.Item) throw new Error("Invalid taskId.");
        eventHandlerId = data.Item.eventHandlerId;
	} catch (error) {
		console.log(error);
		throw error;
	}

    // Delete the EventHandler associated with the Task, if it exists
    if (eventHandlerId) {
        const invokeParams = {
            FunctionName: process.env.FUNCTION_DELETEEVENTHANDLER_NAME,
            Payload: JSON.stringify({
                arguments: {
                    eventHandlerId,
                }
            }),
        };

        try {
            const deletionResult = await lambda.invoke(invokeParams).promise();
            console.log(deletionResult);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    // Delete the Task itself
    const deleteParams = {
        TableName: process.env.API_HOUSEHOLDAPP_TASKTABLE_NAME,
        Key: {
            id: taskId,
        }
    }

    try {
		await dynamoDb.delete(deleteParams).promise();
	} catch (error) {
		console.log(error);
		throw error;
	}

    return "Task successfully deleted.";
};
