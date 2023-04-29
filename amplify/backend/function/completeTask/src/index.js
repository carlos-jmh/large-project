/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_EVENTHANDLERTABLE_ARN
	API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME
	API_HOUSEHOLDAPP_EVENTTABLE_ARN
	API_HOUSEHOLDAPP_EVENTTABLE_NAME
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	API_HOUSEHOLDAPP_ITEMTABLE_ARN
	API_HOUSEHOLDAPP_ITEMTABLE_NAME
	API_HOUSEHOLDAPP_LISTTABLE_ARN
	API_HOUSEHOLDAPP_LISTTABLE_NAME
	API_HOUSEHOLDAPP_TASKTABLE_ARN
	API_HOUSEHOLDAPP_TASKTABLE_NAME
	ENV
    FUNCTION_COMPLETEEVENT_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const lambda = new AWS.Lambda({
    region: process.env.REGION
});

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    // this passes in taskId
    const taskId = event.arguments.taskId;

    const date = new Date();
    const updatedAt = date.toISOString();
    const lastChangedAt = date.getTime();

    let flaggedToComplete = true;

    // Get the Task
    const queryTask = {
        TableName: process.env.API_HOUSEHOLDAPP_TASKTABLE_NAME,
        Key: {
            id: taskId
        }
    };

    try {
        var query = await ddb.get(queryTask).promise();
        var list_id = query.Item.listId;
        var item_id = query.Item.itemId;
    }
    catch (error) {
        console.log(error);
        throw new Error('Error querying task');
    }

    // CompleteOnSource Handling
    const updateList = {
        TableName: process.env.API_HOUSEHOLDAPP_LISTTABLE_NAME,
        Key: {
            id: list_id
        },
        UpdateExpression: "set #bool = :x, #version = #version + :y, #updatedAt = :updatedAtValue, #lastChangedAt = :lastChangedAtValue",
        ExpressionAttributeNames: {
            "#bool": "completed",
            "#version": "_version",
            "#updatedAt": "updatedAt",
            "#lastChangedAt": "_lastChangedAt"
        },
        ExpressionAttributeValues: {
            ":x": true,
            ":y": 1,
            ":updatedAtValue": updatedAt,
            ":lastChangedAtValue": lastChangedAt
        }
    };
    const updateItem = {
        TableName: process.env.API_HOUSEHOLDAPP_ITEMTABLE_NAME,
        Key: {
            id: item_id
        }
        ,
        UpdateExpression: "set #bool = :x, #version = #version + :y, #updatedAt = :updatedAtValue, #lastChangedAt = :lastChangedAtValue",
        ExpressionAttributeNames: {
            "#bool": "completed",
            "#version": "_version",
            "#updatedAt": "updatedAt",
            "#lastChangedAt": "_lastChangedAt"
        },
        ExpressionAttributeValues: {
            ":x": true,
            ":y": 1,
            ":updatedAtValue": updatedAt,
            ":lastChangedAtValue": lastChangedAt
        }
    };

    if (query.Item.completeSourceOnComplete == true) {
        if ((list_id != null && list_id != "") && (item_id != null && item_id != "")) {
            throw new Error('Cannot have both list and task ids');
        }
        else if (list_id != null && list_id != "") {
            try {
                await ddb.update(updateList).promise();
            }
            catch (error) {
                console.log(error);
                throw new Error('Error updating list');
            }
        }
        else if (item_id != null && item_id != "") {
            try {
                await ddb.update(updateItem).promise();
            }
            catch (error) {
                console.log(error);
                throw new Error('Error updating item');
            }
        }
    }

    // Update EventHandler handling
    const queryEventHandler = {
        TableName: process.env.API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME,
        Key: {
            id: query.Item.eventHandlerId
        },
    };

    if (query.Item.eventHandlerId != null && query.Item.eventHandlerId != "") {

        if (query.Item.foreverTask == true) {
            throw new Error('Forever Tasks with recurrence are not supported.');
        }

        try {
            const queryEventHandlerResponse = await ddb.get(queryEventHandler).promise();
            const eventHandler = queryEventHandlerResponse.Item;

            // complete upcoming event with lambda function
            const completeEventParams = {
                FunctionName: process.env.FUNCTION_COMPLETEEVENT_NAME,
                Payload: JSON.stringify(eventHandler),
            };

            const completeEventResponse = (await lambda.invoke(completeEventParams).promise());
            if (completeEventResponse.FunctionError) {
                console.log(completeEventResponse.Payload);
                throw new Error("Error invoking createEventHandler.");
            }

            const isDoneWithLinkedList = JSON.parse(completeEventResponse.Payload);
            
            // make sure the Task is not completed if there are no more occurrences left
            flaggedToComplete = isDoneWithLinkedList;

        } catch (error) {
            console.log(error);
            throw new Error('Error updating eventHandler');
        }
    }

    // Update Task itself (foreverTask handling)
    const updateTask = {
        TableName: process.env.API_HOUSEHOLDAPP_TASKTABLE_NAME,
        Key: {
            id: taskId
        },
        UpdateExpression: "set #bool = :x, #version = #version + :y, #updatedAt = :updatedAtValue, #lastChangedAt = :lastChangedAtValue",
        ExpressionAttributeNames: {
            "#bool": "completed",
            "#version": "_version",
            "#updatedAt": "updatedAt",
            "#lastChangedAt": "_lastChangedAt"
        },
        ExpressionAttributeValues: {
            ":x": true,
            ":y": 1,
            ":updatedAtValue": updatedAt,
            ":lastChangedAtValue": lastChangedAt
        }
    };

    if (!query.Item.foreverTask && flaggedToComplete) {
        try {
            await ddb.update(updateTask).promise();
        }
        catch (error) {
            console.log(error);
            return new Error('Error updating task');
        }
    }

    return taskId;
};
