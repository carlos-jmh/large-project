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
    const { calendarId, taskId, sourceDate, endDate, eventType, title } = event.arguments;
	const frequency = event.arguments.frequency.toLowerCase();
    const eventHandlerId = uuidv4();
	const firstEventId = uuidv4();
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
	if (dateDifference < 0) {
		console.log(`endDate ${endDate} is before sourceDate ${sourceDate}`);
		throw new Error("End date cannot be before source date.");
	} else if (numYears > maxYears) {
		console.log(`Date difference is greater than ${maxYears} year(s).`);
		throw new Error(`End date cannot be more than ${maxYears} year(s) ahead.`);
	}
	
	let putEventHandlerParams;

	// Generate params according to whether events are of type "TASK"
	if (eventType == "TASK")
	{
		// Throw error if no taskId was given
		if (!taskId) throw new Error("TaskId must be given for Events of eventType 'TASK'.");

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

		putEventHandlerParams = {
			TableName: process.env.API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME,
			Item: {
				id: eventHandlerId,
				frequency,
				calendarId,
				taskId,
				upcomingEventId: firstEventId,
				title,
				sourceDate,
				endDate,

				createdAt,
				updatedAt: createdAt,

				__typename: "EventHandler",
				_lastChangedAt: lastChangedAt,
				_version: 1,
			},
		}
	} else {
		putEventHandlerParams = {
			TableName: process.env.API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME,
			Item: {
				id: eventHandlerId,
				frequency,
				calendarId,
				sourceDate,
				endDate,
				title,

				createdAt,
				updatedAt: createdAt,
				
				__typename: "EventHandler",
				_lastChangedAt: lastChangedAt,
				_version: 1,
			},
		}
	}

	// Create a new EventHandler    
	try {
		await dynamoDb.put(putEventHandlerParams).promise();
	} catch (error) {
		console.log(error);
		return new Error('Error creating EventHandler');
	}

	// Generate events according to specified frequency
	const promises = [];
	const checkpoint = new Date(sourceDateObj);
	const eventFields = {
		currId: firstEventId,
		prevId: "",
		nextId: "",
		eventHandlerId,
		calendarId,
		eventType,
	}

	switch (frequency) {
		case ("once"):
			// Generate single event
			let putEventParams;
			
			if (eventType == "TASK") {
				putEventParams = {
					TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
					Item: {
						id: firstEventId,
						prevEventId: "",
						nextEventId: "",
						eventHandlerId,
						calendarId,
						eventType,
						completed: false,
						date: checkpoint.toISOString(),
					}
				}
			} else {
				putEventParams = {
					TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
					Item: {
						id: eventFields.currId,
						prevEventId: "",
						nextEventId: "",
						eventHandlerId,
						calendarId,
						eventType,
						date: checkpoint.toISOString(),
					}
				}
			}

			try {
				await dynamoDb.put(putEventParams).promise();
			} catch (error) {
				console.log(error);
				throw error;
			}
			break;
		case ("daily"):
			// Generate promises encompassing all batchWriteParams
			do {
				promises.push(dynamoDb.batchWrite(genDailyParams(eventFields, checkpoint, endDateObj)).promise());
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
				promises.push(dynamoDb.batchWrite(genWeeklyParams(eventFields, checkpoint, endDateObj)).promise());
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
				promises.push(dynamoDb.batchWrite(genMonthlyParams(eventFields, checkpoint, endDateObj)).promise());
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
				await dynamoDb.batchWrite(genYearlyParams(eventFields, checkpoint, endDateObj)).promise();
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

const genDailyParams = (eventFields, checkpoint, endDateObj) => {
	const putRequests = [];
	const MAX_BATCH_WRITE_REQUESTS = 25;
	let daysToJump = 1;
	
	while (endDateObj >= checkpoint) {
		const nextDate = (new Date(checkpoint));
		nextDate.addDays(daysToJump);
		if (endDateObj < nextDate) eventFields.nextId = "";
		else eventFields.nextId = uuidv4();

		putRequests.push(genPutRequest(eventFields, checkpoint.toISOString()));
		checkpoint.addDays(daysToJump);

		// Resolve ids for doubly-linked events
		eventFields.prevId = eventFields.currId;
		eventFields.currId = eventFields.nextId;

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

const genWeeklyParams = (eventFields, checkpoint, endDateObj) => {
	const putRequests = [];
	const MAX_BATCH_WRITE_REQUESTS = 25;
	let daysToJump = 7; // 7 days/week

	while (endDateObj >= checkpoint) {
		const nextDate = (new Date(checkpoint));
		nextDate.addDays(daysToJump);
		if (endDateObj < nextDate) eventFields.nextId = "";
		else eventFields.nextId = uuidv4();

		putRequests.push(genPutRequest(eventFields, checkpoint.toISOString()));
		checkpoint.addDays(daysToJump);

		// Resolve ids for doubly-linked events
		eventFields.prevId = eventFields.currId;
		eventFields.currId = eventFields.nextId;
		
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

const genMonthlyParams = (eventFields, checkpoint, endDateObj) => {
	const putRequests = [];
	const MAX_BATCH_WRITE_REQUESTS = 25;
	let nextMonth = checkpoint.getMonth() + 1;
	
	while (endDateObj >= checkpoint) {
		const nextDate = (new Date(checkpoint));
		nextDate.setMonth(nextMonth);
		if (endDateObj < nextDate) eventFields.nextId = "";
		else eventFields.nextId = uuidv4();

		putRequests.push(genPutRequest(eventFields, checkpoint.toISOString()));
		checkpoint.setMonth(nextMonth);
		// If true, date moved to following year
		if (nextMonth > 11) nextMonth = 0;
		nextMonth++;

		// Resolve ids for doubly-linked events
		eventFields.prevId = eventFields.currId;
		eventFields.currId = eventFields.nextId;

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

const genYearlyParams = (eventFields, checkpoint, endDateObj) => {
	const putRequests = [];
	let nextYear = checkpoint.getFullYear() + 1;

	while (endDateObj >= checkpoint) {
		const nextDate = (new Date(checkpoint));
		nextDate.setFullYear(nextYear);
		if (endDateObj < nextDate) eventFields.nextId = "";
		else eventFields.nextId = uuidv4();
		
		putRequests.push(genPutRequest(eventFields, checkpoint.toISOString()));
		checkpoint.setFullYear(nextYear);
		nextYear++;

		// Resolve ids for doubly-linked events
		eventFields.prevId = eventFields.currId;
		eventFields.currId = eventFields.nextId;
	}
	const params = {
		RequestItems: {
			[process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME]: putRequests,
		}
	}

	return params;
}

const genPutRequest = (eventFields, date) => {
	const creationDate = new Date();
	const createdAt = creationDate.toISOString();
	const lastChangedAt = creationDate.getTime();

	if (eventFields.eventType == "TASK") {
		return {
			PutRequest: {
				Item: {
					id: eventFields.currId,
					prevEventId: eventFields.prevId,
					nextEventId: eventFields.nextId,
					eventHandlerId: eventFields.eventHandlerId,
					calendarId: eventFields.calendarId,
					eventType: eventFields.eventType,
					completed: false,
					date,

					createdAt,
					updatedAt: createdAt,

					__typename: "Event",
					_lastChangedAt: lastChangedAt,
					_version: 1
				}
			},
		}
	} else {
		return {
			PutRequest: {
				Item: {
					id: eventFields.currId,
					prevEventId: eventFields.prevId,
					nextEventId: eventFields.nextId,
					eventHandlerId: eventFields.eventHandlerId,
					calendarId: eventFields.calendarId,
					eventType: eventFields.eventType,
					date,

					createdAt,
					updatedAt: createdAt,

					__typename: "Event",
					_lastChangedAt: lastChangedAt,
					_version: 1
				}
			},
		}
	}
}

// Helper function for adding days to a date
Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
}
