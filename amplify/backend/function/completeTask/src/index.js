/* Amplify Params - DO NOT EDIT
    API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
    API_HOUSEHOLDAPP_ITEMTABLE_ARN
    API_HOUSEHOLDAPP_ITEMTABLE_NAME
    API_HOUSEHOLDAPP_LISTTABLE_ARN
    API_HOUSEHOLDAPP_LISTTABLE_NAME
    API_HOUSEHOLDAPP_TASKTABLE_ARN
    API_HOUSEHOLDAPP_TASKTABLE_NAME
    ENV
    REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

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

    const queryTask = {
        TableName: process.env.API_HOUSEHOLDAPP_TASKTABLE_NAME,
        Key: {
            id: taskId
        }
    }

    try {
        var query = await ddb.get(queryTask).promise();
        var list_id = query.Item.listId;
        var item_id = query.Item.itemId;
    }
    catch (error) {
        console.log(error)
        return new Error('Error querying task')
    }

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
    }
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
    }

    if (query.Item.completeSourceOnComplete == true) {
        if (list_id != null && item_id != null) {
            console.log(error)
            return new Error('Cannot have both list and task ids')
        }
        else if (list_id != null) {
            try {
                await ddb.update(updateList).promise()
            }
            catch (error) {
                console.log(error)
                return new Error('Error updating list')
            }
        }
        else if (item_id != null) {
            try {
                await ddb.update(updateItem).promise()
            }
            catch (error) {
                console.log(error)
                return new Error('Error updating item')
            }
        }
    }

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

    if (!query.Item.foreverTask) {
        try {
            await ddb.update(updateTask).promise()
        }
        catch (error) {
            console.log(error)
            return new Error('Error updating task')
        }
    }

    return taskId;
};
