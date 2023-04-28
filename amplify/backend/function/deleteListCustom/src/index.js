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
const dynamodb = new AWS.DynamoDB.DocumentClient();
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const listId = event.arguments.listId;


    // check if items have the listId

    const itemQuery = {
        TableName: process.env.API_HOUSEHOLDAPP_ITEMTABLE_NAME,
        IndexName: 'byList',
        KeyConditionExpression: 'listId = :id',
        ExpressionAttributeValues: { ':id': listId }
    };

    try {
        const result = await dynamodb.query(itemQuery).promise();
        var itemsToDelete = result.Items;
    }
    catch (error) {
        console.log(error);
        return error;
    }


    // This is where we attempt to delete all Items with ListId

    if (itemsToDelete.length > 0) {
        const deletePromise = itemsToDelete.map(item => {
            const deleteItems = {
                TableName: process.env.API_HOUSEHOLDAPP_ITEMTABLE_NAME,
                Key: {
                    'id': item.id // WE WILL WANT TO BE WARY OF THIS
                }
            };
            return dynamodb.delete(deleteItems).promise();
        });
        await Promise.all(deletePromise);
    }

    const deleteListParam = {
        TableName: process.env.API_HOUSEHOLDAPP_LISTTABLE_NAME,
        Key: {
            'id': listId
        }
    }

    try {
        await dynamodb.delete(deleteListParam).promise();

        return "true";
    }
    catch (error) {
        console.log(error);
        return error;
    }







};
