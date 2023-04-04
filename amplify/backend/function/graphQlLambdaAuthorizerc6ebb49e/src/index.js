/* Amplify Params - DO NOT EDIT
	API_HOUSEHOLDAPP_CALENDARTABLE_ARN
	API_HOUSEHOLDAPP_CALENDARTABLE_NAME
	API_HOUSEHOLDAPP_CHATROOMTABLE_ARN
	API_HOUSEHOLDAPP_CHATROOMTABLE_NAME
	API_HOUSEHOLDAPP_EVENTHANDLERTABLE_ARN
	API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME
	API_HOUSEHOLDAPP_EVENTTABLE_ARN
	API_HOUSEHOLDAPP_EVENTTABLE_NAME
	API_HOUSEHOLDAPP_GRAPHQLAPIIDOUTPUT
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDMEMBERTABLE_NAME
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_ARN
	API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME
	API_HOUSEHOLDAPP_ITEMTABLE_ARN
	API_HOUSEHOLDAPP_ITEMTABLE_NAME
	API_HOUSEHOLDAPP_LISTTABLE_ARN
	API_HOUSEHOLDAPP_LISTTABLE_NAME
	API_HOUSEHOLDAPP_MESSAGETABLE_ARN
	API_HOUSEHOLDAPP_MESSAGETABLE_NAME
	API_HOUSEHOLDAPP_TASKTABLE_ARN
	API_HOUSEHOLDAPP_TASKTABLE_NAME
	API_HOUSEHOLDAPP_USERPROFILETABLE_ARN
	API_HOUSEHOLDAPP_USERPROFILETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const { parse } = require('graphql');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const {
    authorizationToken,
    requestContext: { queryString },
  } = event;

  // use athorizationToken to determine the sub of the caller from cognito
  const cognito = new AWS.CognitoIdentityServiceProvider();
  const accessToken = authorizationToken.replace(/^Banana\s/, "");
  try {
    const userInfo = await cognito.getUser({ AccessToken: accessToken }).promise();
    const sub = userInfo.UserAttributes.find((attr) => attr.Name === "sub").Value;

    // parsing the queryString creates an Abstract Syntax Tree (AST)
    const ast = parse(queryString);

    const isAuthorizedToPerformQuery = await checkAuthorization(ast, sub);

    return {
      isAuthorized: isAuthorizedToPerformQuery,
      resolverContext: { "banana": "very yellow" },
    };

  } catch (error) {
    console.log("ERROR: ", error);
    return {
      isAuthorized: false,
    };
  }
};

async function checkAuthorization(ast, sub) {
  const querySelections = ast.definitions[0].selectionSet.selections;

  const dynamo = new AWS.DynamoDB.DocumentClient();

  // check every query in the query string
  for (const selection of querySelections) {
    const queryName = selection.name.value;

    switch (queryName) {
      // Queries
      case "eventHandlersByCalendarId": {
        const calendarId = retrieveArgument("calendarId", selection);
        if (!await isAuthorizedForCalendar(dynamo, calendarId, sub)) {
          return false;
        }
        break;
      }
      case "eventsByCalendarId": {
        const calendarId = retrieveArgument("calendarId", selection);
        if (!await isAuthorizedForCalendar(dynamo, calendarId, sub)) {
          return false;
        }
        break;
      }
      case "eventsByEventHandlerId": {
        const eventHandlerId = retrieveArgument("eventHandlerId", selection);
        if (!await isAuthorizedForEventHandler(dynamo, eventHandlerId, sub)) {
          return false;
        }
        break;
      }
      case "getCalendar": {
        const calendarId = retrieveArgument("id", selection);
        if (!await isAuthorizedForCalendar(dynamo, calendarId, sub)) {
          return false;
        }
        break;
      }
      case "getChatRoom": {
        const chatRoomId = retrieveArgument("id", selection);
        if (!await isAuthorizedForChatRoom(dynamo, chatRoomId, sub)) {
          return false;
        }
        break;
      }
      case "getEvent": {
        const eventId = retrieveArgument("id", selection);
        if (!await isAuthorizedForEvent(dynamo, eventId, sub)) {
          return false;
        }
        break;
      }
      case "getEventHandler": {
        const eventHandlerId = retrieveArgument("id", selection);
        if (!await isAuthorizedForEventHandler(dynamo, eventHandlerId, sub)) {
          return false;
        }
        break;
      }
      case "getItem": {
        const itemId = retrieveArgument("id", selection);
        if (!await isAuthorizedForItem(dynamo, itemId, sub)) {
          return false;
        }
        break;
      }
      case "getList": {
        const listId = retrieveArgument("id", selection);
        if (!await isAuthorizedForList(dynamo, listId, sub)) {
          return false;
        }
        break;
      }
      case "getMessage": {
        const messageId = retrieveArgument("id", selection);
        if (!await isAuthorizedForMessage(dynamo, messageId, sub)) {
          return false;
        }
        break;
      }
      case "getTask": {
        const taskId = retrieveArgument("id", selection);
        if (!await isAuthorizedForTask(dynamo, taskId, sub)) {
          return false;
        }
        break;
      }
      case "houseHoldMembersByHouseHoldId": {
        const houseHoldId = retrieveArgument("houseHoldId", selection);
        if (!await isAuthorizedForHouseHold(dynamo, houseHoldId, sub)) {
          return false;
        }
        break;
      }
      case "itemsByListId": {
        const listId = retrieveArgument("listId", selection);
        if (!await isAuthorizedForList(dynamo, listId, sub)) {
          return false;
        }
        break;
      }
      case "listsByHouseHoldId": {
        const houseHoldId = retrieveArgument("houseHoldId", selection);
        if (!await isAuthorizedForHouseHold(dynamo, houseHoldId, sub)) {
          return false;
        }
        break;
      }
      case "messagesByChatRoomId": {
        const chatRoomId = retrieveArgument("chatRoomId", selection);
        if (!await isAuthorizedForChatRoom(dynamo, chatRoomId, sub)) {
          return false;
        }
        break;
      }
      case "tasksByHouseHoldId": {
        const houseHoldId = retrieveArgument("houseHoldId", selection);
        if (!await isAuthorizedForHouseHold(dynamo, houseHoldId, sub)) {
          return false;
        }
        break;
      }
      case "userProfileByOwner": {
        const owner = retrieveArgument("owner", selection);
        if (owner !== sub) {
          return false;
        }
        break;
      }

      // Mutations
      case "addUserToHouseHold": {
        const houseHoldId = retrieveArgument("houseHoldId", selection);
        if (!await isAuthorizedForHouseHold(dynamo, houseHoldId, sub)) {
          return false;
        }
        break;
      }
      case "createEventHandler": {
        const calendarId = retrieveArgument("calendarId", selection.arguments);
        if (!await isAuthorizedForCalendar(dynamo, calendarId, sub)) {
          return false;
        }
        break;
      }
      case "updateEventHandler": {
        const eventHandlerId = retrieveArgument("eventHandlerId", selection.arguments);
        if (!await isAuthorizedForEventHandler(dynamo, eventHandlerId, sub)) {
          return false;
        }
        break;
      }
      case "deleteEventHandler": {
        const eventHandlerId = retrieveArgument("eventHandlerId", selection.arguments);
        if (!await isAuthorizedForEventHandler(dynamo, eventHandlerId, sub)) {
          return false;
        }
        break;
      }
      case "createItem": {
        const listId = retrieveInputArgument("listId", selection);
        if (!await isAuthorizedForList(dynamo, listId, sub)) {
          return false;
        }
        break;
      }
      case "createList": {
        const houseHoldId = retrieveInputArgument("houseHoldId", selection);
        if (!await isAuthorizedForHouseHold(dynamo, houseHoldId, sub)) {
          return false;
        }
        break;
      }
      case "createTask": {
        const houseHoldId = retrieveInputArgument("houseHoldId", selection);
        if (!await isAuthorizedForHouseHold(dynamo, houseHoldId, sub)) {
          return false;
        }
        break;
      }
      case "deleteItem": {
        const itemId = retrieveInputArgument("id", selection);
        if (!await isAuthorizedForItem(dynamo, itemId, sub)) {
          return false;
        }
        break;
      }
      case "deleteList": {
        const listId = retrieveInputArgument("id", selection);
        if (!await isAuthorizedForList(dynamo, listId, sub)) {
          return false;
        }
        break;
      }
      case "deleteTask": {
        const taskId = retrieveInputArgument("id", selection);
        if (!await isAuthorizedForTask(dynamo, taskId, sub)) {
          return false;
        }
        break;
      }
      case "updateItem": {
        const itemId = retrieveInputArgument("id", selection);
        if (!await isAuthorizedForItem(dynamo, itemId, sub)) {
          return false;
        }
        break;
      }
      case "updateList": {
        const listId = retrieveInputArgument("id", selection);
        if (!await isAuthorizedForList(dynamo, listId, sub)) {
          return false;
        }
        break;
      }
      case "updateTask": {
        const taskId = retrieveInputArgument("id", selection);
        if (!await isAuthorizedForTask(dynamo, taskId, sub)) {
          return false;
        }
        break;
      }
      
      default:
        return false;
    }
  }

  return true;
}

async function isAuthorizedForTask(dynamo, taskId, sub) {
  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_TASKTABLE_NAME,
    Key: {
      id: taskId,
    },
  };

  try {
    const result = await dynamo.get(params).promise();
    const task = result.Item;

    if (task && task.houseHoldId) {
      return await isAuthorizedForHouseHold(dynamo, task.houseHoldId, sub);
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return false;
}

async function isAuthorizedForMessage(dynamo, messageId, sub) {
  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_MESSAGETABLE_NAME,
    Key: {
      id: messageId,
    },
  };

  try {
    const result = await dynamo.get(params).promise();
    const message = result.Item;

    if (message && message.chatRoomId) {
      return await isAuthorizedForChatRoom(dynamo, message.chatRoomId, sub);
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return false;
}

async function isAuthorizedForItem(dynamo, itemId, sub) {
  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_ITEMTABLE_NAME,
    Key: {
      id: itemId,
    },
  };

  try {
    const result = await dynamo.get(params).promise();
    const item = result.Item;

    if (item && item.listId) {
      return await isAuthorizedForList(dynamo, item.listId, sub);
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return false;
}

async function isAuthorizedForList(dynamo, listId, sub) {
  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_LISTTABLE_NAME,
    Key: {
      id: listId,
    },
  };

  try {
    const result = await dynamo.get(params).promise();
    const list = result.Item;

    if (list && list.houseHoldId) {
      return await isAuthorizedForHouseHold(dynamo, list.houseHoldId, sub);
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return false;
}

async function isAuthorizedForEventHandler(dynamo, eventHandlerId, sub) {
  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_EVENTHANDLERTABLE_NAME,
    Key: {
      id: eventHandlerId,
    },
  }

  try {
    const result = await dynamo.get(params).promise();
    const eventHandler = result.Item;

    if (eventHandler && eventHandler.calendarId) {
      return await isAuthorizedForCalendar(dynamo, eventHandler.calendarId, sub);
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return false;
}

async function isAuthorizedForEvent(dynamo, eventId, sub) {
  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_EVENTTABLE_NAME,
    Key: {
      id: eventId,
    },
  };
  
  try {
    const result = await dynamo.get(params).promise();
    const event = result.Item;

    if (event && event.calendarId) {
      return await isAuthorizedForCalendar(dynamo, event.calendarId, sub);
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return false;
}

async function isAuthorizedForChatRoom(dynamo, chatRoomId, sub) {
  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_CHATROOMTABLE_NAME,
    Key: {
      id: chatRoomId,
    },
  };

  try {
    const result = await dynamo.get(params).promise();
    const chatRoom = result.Item;

    if (chatRoom && chatRoom.houseHoldId) {
      const houseHoldId = chatRoom.houseHoldId;
      return await isAuthorizedForHouseHold(dynamo, houseHoldId, sub);
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return false;
}

async function isAuthorizedForCalendar(dynamo, calendarId, sub) {
  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_CALENDARTABLE_NAME,
    Key: {
      id: calendarId,
    },
  };

  try {
    const result = await dynamo.get(params).promise();
    const calendar = result.Item;

    if (calendar && calendar.houseHoldId) {
      return await isAuthorizedForHouseHold(dynamo, calendar.houseHoldId, sub);
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return false;
}

async function isAuthorizedForHouseHold(dynamo, houseHoldId, sub) {
  const params = {
    TableName: process.env.API_HOUSEHOLDAPP_HOUSEHOLDTABLE_NAME,
    Key: {
      id: houseHoldId,
    },
  };

  try {
    const result = await dynamo.get(params).promise();
    const houseHold = result.Item;

    if (houseHold && houseHold.owners && houseHold.owners.includes(sub)) {
      return true;
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }

  return false;
}

function retrieveArgument(argumentName, selection) {
  if (selection.arguments && selection.arguments.length > 0) {
    const argument = selection.arguments.find((arg) => arg.name.value === argumentName);
    if (argument) {
      return argument.value.value;
    }
  } else if (selection.variable && selection.variable.name) {
    return selection.variable.name.value;
  }

  return null;
}

function retrieveInputArgument(argumentName, selection) {
  if (selection.arguments && selection.arguments.length > 0) {
    const input = selection.arguments.find((arg) => arg.name.value === "input");
    if (input && input.value.fields) {
      const argument = input.value.fields.find((arg) => arg.name.value === argumentName);
      if (argument) {
        return argument.value.value;
      }
    }
  } else if (selection.variable && selection.variable.name) {
    return selection.variable.name.value;
  }
}
