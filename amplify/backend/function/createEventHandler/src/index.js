/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_EVENTHANDLERTABLE_ARN
	API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME
	API_HOUSEHOLDAPP_EVENTTABLE_ARN
	API_HOUSEHOLDAPP_EVENTTABLE_NAME
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	API_HOUSEHOLDAPP_TASKTABLE_ARN
	API_HOUSEHOLDAPP_TASKTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const {calendarId, taskId, sourceDate, endDate} = event.arguments;
	const frequency = event.arguments.frequency.toLowerCase();
    const eventHandlerId = uuidv4();
	const dynamoDb = new AWS.DynamoDB.DocumentClient();
	const date = new Date();
	const createdAt = date.toISOString();
	const lastChangedAt = date.getTime();
	const maxYears = 3; // If this changes, it also must be changed in the updateEventHandler Lambda function
	const millisecondsPerDay = 24 * 60 * 60 * 1000;

	console.log(`EVENT: ${JSON.stringify(event)}`);
	
	// Generate Date objects from input ISO-8601 DateTimes
	const sourceDateObj = new Date(sourceDate);
	const endDateObj = new Date(endDate);
	
	// Calculate # of days between source and end dates
	const dateDifference = endDateObj - sourceDateObj;
	const numYears = Math.round(dateDifference / millisecondsPerDay) / 365;

	// Ensure sourceDate is before endDate and that the difference does not exceed maxYears years
	if (dateDifference < 0 || dateDifference == 0) {
		console.log(`endDate ${endDate} is behind or equal to sourceDate ${sourceDate}`);
		throw new Error("End date cannot be before or equal to source date.");
	} else if (numYears > maxYears) {
		console.log(`Date difference is greater than ${maxYears} year(s).`);
		throw new Error(`End date cannot be more than ${maxYears} year(s) ahead.`);
	}
	
	// Check if taskId points to an existing Task
	const getParams = {
		TableName: process.env.API_HOUSEHOLDAPP_TASKTABLE_NAME,
		Key: {
			id: taskId,
		}
	}

	try {
		const data = await dynamoDb.get(getParams).promise();
		if (!data.Item) throw new Error("Invalid taskId.");
	} catch (error) {
		console.log(error);
		throw error;
	}

	// Create a new EventHandler
	const putEventHandlerParams = {
		TableName: process.env.API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME,
		Item: {
			id: eventHandlerId,
			frequency,
			calendarId,
			taskId,
			sourceDate,
			endDate,
			createdAt,
			lastChangedAt,
		},
	}
    
	try {
		await dynamoDb.put(putEventHandlerParams).promise();
	} catch (error) {
		console.log(error);
		return new Error('Error creating EventHandler');
	}
	

	// Generate events according to specified frequency
	const promises = [];
	const checkpoint = new Date(sourceDateObj);
	let eventIds = {
		currId: uuidv4(),
		prevId: null,
		nextId: null,
	}

	switch (frequency) {
		case ("daily"):
			// Generate promises encompassing all batchWriteParams
			do {
				promises.push(dynamoDb.batchWrite(genDailyParams(eventIds, eventHandlerId, calendarId, checkpoint, endDateObj)).promise());
			} while (endDateObj >= checkpoint); 

			try {
				await Promise.all(promises);
			} catch (error) {
				console.log(error);
				throw error;
			}
			break;
		case ("weekly"):
			// Generate promises encompassing all batchWriteParams
			do {
				promises.push(dynamoDb.batchWrite(genWeeklyParams(eventIds, eventHandlerId, calendarId, checkpoint, endDateObj)).promise());
			} while (endDateObj >= checkpoint); 

			try {
				await Promise.all(promises);
			} catch (error) {
				console.log(error);
				throw error;
			}
			break;
		case ("monthly"):
			// Generate promises encompassing all batchWriteParams
			do {
				promises.push(dynamoDb.batchWrite(genMonthlyParams(eventIds, eventHandlerId, calendarId, checkpoint, endDateObj)).promise());
			} while (endDateObj >= checkpoint); 

			try {
				await Promise.all(promises);
			} catch (error) {
				console.log(error);
				throw error;
			}
			break;
		case ("yearly"):
			try {
				await dynamoDb.batchWrite(genYearlyParams(eventIds, eventHandlerId, calendarId, checkpoint, endDateObj)).promise();
			} catch (error) {
				console.log(error);
				throw error;
			}
			break;
		default:
			throw new Error("Invalid frequency.");
	}

	return eventHandlerId;
};

const genDailyParams = (eventIds, eventHandlerId, calendarId, checkpoint, endDateObj) => {
	const putRequests = [];
	const MAX_BATCH_WRITE_REQUESTS = 25;
	let daysToJump = 1;
	
	while (endDateObj >= checkpoint) {
		const nextDate = (new Date(checkpoint));
		nextDate.addDays(daysToJump);
		if (endDateObj < nextDate) eventIds.nextId = null;
		else eventIds.nextId = uuidv4();

		putRequests.push(genPutRequest(eventIds, eventHandlerId, calendarId, checkpoint.toISOString()));
		checkpoint.addDays(daysToJump);

		// Resolve ids for doubly-linked events
		eventIds.prevId = eventIds.currId;
		eventIds.currId = eventIds.nextId;

		if (putRequests.length >= MAX_BATCH_WRITE_REQUESTS)
			break;
	}

	const params = {
		RequestItems: {
			[process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME]: putRequests,
		}
	}

	return params;
}

const genWeeklyParams = (eventIds, eventHandlerId, calendarId, checkpoint, endDateObj) => {
	const putRequests = [];
	const MAX_BATCH_WRITE_REQUESTS = 25;
	let daysToJump = 7; // 7 days/week

	while (endDateObj >= checkpoint) {
		const nextDate = (new Date(checkpoint));
		nextDate.addDays(daysToJump);
		if (endDateObj < nextDate) eventIds.nextId = null;
		else eventIds.nextId = uuidv4();

		putRequests.push(genPutRequest(eventIds, eventHandlerId, calendarId, checkpoint.toISOString()));
		checkpoint.addDays(daysToJump);

		// Resolve ids for doubly-linked events
		eventIds.prevId = eventIds.currId;
		eventIds.currId = eventIds.nextId;
		
		if (putRequests.length >= MAX_BATCH_WRITE_REQUESTS)
			break;
	}

	const params = {
		RequestItems: {
			[process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME]: putRequests,
		}
	}

	return params;
}

const genMonthlyParams = (eventIds, eventHandlerId, calendarId, checkpoint, endDateObj) => {
	const putRequests = [];
	const MAX_BATCH_WRITE_REQUESTS = 25;
	let nextMonth = checkpoint.getMonth() + 1;
	
	while (endDateObj >= checkpoint) {
		const nextDate = (new Date(checkpoint));
		nextDate.setMonth(nextMonth);
		if (endDateObj < nextDate) eventIds.nextId = null;
		else eventIds.nextId = uuidv4();

		putRequests.push(genPutRequest(eventIds, eventHandlerId, calendarId, checkpoint.toISOString()));
		checkpoint.setMonth(nextMonth);
		// If true, date moved to following year
		if (nextMonth > 11) nextMonth = 0;
		nextMonth++;

		// Resolve ids for doubly-linked events
		eventIds.prevId = eventIds.currId;
		eventIds.currId = eventIds.nextId;

		if (putRequests.length >= MAX_BATCH_WRITE_REQUESTS)
			break;
	}

	const params = {
		RequestItems: {
			[process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME]: putRequests,
		}
	}

	return params;
}

const genYearlyParams = (eventIds, eventHandlerId, calendarId, checkpoint, endDateObj) => {
	const putRequests = [];
	let nextYear = checkpoint.getFullYear() + 1;

	while (endDateObj >= checkpoint) {
		const nextDate = (new Date(checkpoint));
		nextDate.setFullYear(nextYear);
		if (endDateObj < nextDate) eventIds.nextId = null;
		else eventIds.nextId = uuidv4();
		
		putRequests.push(genPutRequest(eventIds, eventHandlerId, calendarId, checkpoint.toISOString()));
		checkpoint.setFullYear(nextYear);
		nextYear++;

		// Resolve ids for doubly-linked events
		eventIds.prevId = eventIds.currId;
		eventIds.currId = eventIds.nextId;
	}
	const params = {
		RequestItems: {
			[process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME]: putRequests,
		}
	}

	return params;
}

const genPutRequest = (eventIds, eventHandlerId, calendarId, date) => {
	return {
		PutRequest: {
			Item: {
				id: eventIds.currId,
				prevEventId: eventIds.prevId,
				nextEventId: eventIds.nextId,
				eventHandlerId,
				calendarId,
				date
			}
		},
	}
}

// Helper function for adding days to a date
Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
}