/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_CREATEEVENTHANDLER_NAME
	FUNCTION_DELETEEVENTHANDLER_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({
    region: process.env.REGION // change to your region
});

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const { eventHandlerId, calendarId, frequency, sourceDate, endDate } = event.arguments;
    let updatedEventHandlerId;
    const maxYears = 3; // If this changes, it also must be changed in the createEventHandler Lambda function
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    
    // Generate Date objects from input ISO-8601 DateTimes
    const sourceDateObj = new Date(sourceDate);
    const endDateObj = new Date(endDate);
    
    // Calculate # of days between source and end dates
    const dateDifference = endDateObj - sourceDateObj;
    const numDays = Math.round(dateDifference / millisecondsPerDay);
    const numYears = numDays / 365;
  
    console.log({
      sourceDate,
      endDate,
      numDays,
      numYears,
    });
  
    // Ensure sourceDate is before endDate and that the difference does not exceed maxYears years
    if (numDays < 0) {
      console.log(`endDate ${endDate} is behind sourceDate ${sourceDate}`);
      throw new Error("End date cannot be before source date.");
    } else if (numYears > maxYears) {
      console.log(`Date difference is greater than ${maxYears} years.`);
      throw new Error(`End date cannot be more than ${maxYears} year(s) ahead.`);
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
      return error;
    }
    
    // Create "updated" version of the EventHandler
    const createParams = {
      FunctionName: process.env.FUNCTION_CREATEEVENTHANDLER_NAME,
      Payload: JSON.stringify(event),
    }

    try {
      updatedEventHandlerId = (await lambda.invoke(createParams).promise()).Payload;
      updatedEventHandlerId = updatedEventHandlerId.replace(/^"(.+(?="$))"$/, '$1'); // remove double-quotes
      console.log(typeof(updatedEventHandlerId));
    }
    catch (error) {
      console.log(error);
      return error;
    }
    
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return updatedEventHandlerId;
};
