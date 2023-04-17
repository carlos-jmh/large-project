/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_CALENDARTABLE_ARN
	API_HOUSEHOLDAPP_CALENDARTABLE_NAME
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	ENV
	FUNCTION_CREATEEVENTHANDLER_NAME
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
  const { eventHandlerId, calendarId, taskId, frequency, sourceDate, endDate } = event.arguments;
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let updatedEventHandlerId;

  console.log(`EVENT: ${JSON.stringify(event)}`);
  
  // Check if calendarId points to an existing Calendar
  const getParams = {
    TableName: process.env.API_HOUSEHOLDAPP_CALENDARTABLE_NAME,
    Key: {
      id: calendarId,
    }
  };

  try {
		const data = await dynamoDb.get(getParams).promise();
		if (!data.Item) throw new Error("Invalid calendarId.");
	} catch (error) {
		console.log(error);
		throw error;
	}

  // Create "updated" version of the EventHandler
  const createParams = {
    FunctionName: process.env.FUNCTION_CREATEEVENTHANDLER_NAME,
    Payload: JSON.stringify(event),
  };

  // All checks on the validity of the parameters occur within the createEventHandler function
  try {
    const creationResult = (await lambda.invoke(createParams).promise());
    if (creationResult.FunctionError) { // only true if error occured in createEventHandler
      console.log(creationResult.Payload);
      throw new Error("Error invoking createEventHandler.");
    }
    updatedEventHandlerId = creationResult.Payload.replace(/^"(.+(?="$))"$/, '$1'); // remove double-quotes
  }
  catch (error) {
    console.log(error);
    throw error;
  }
  
  // Delete "old" version of the EventHandler
  const deleteParams = {
    FunctionName: process.env.FUNCTION_DELETEEVENTHANDLER_NAME,
    Payload: JSON.stringify(event),
  };

  try {
    const deletionResult = await lambda.invoke(deleteParams).promise();
    console.log(deletionResult);
  }
  catch (error) {
    console.log(error);
    throw error;
  }

  return updatedEventHandlerId;
};
