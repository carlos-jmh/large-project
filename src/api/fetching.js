import { API } from "aws-amplify";
import { getCognitoToken } from "../components/AuthUser";
import {
  eventHandlersByCalendarId,
  eventsByCalendarId,
  getHouseHold,
  houseHoldMembersByHouseHoldId,
  itemsByListId,
  listHouseHoldMembers,
  listHouseHolds,
  listsByHouseHoldId,
  tasksByHouseHoldId
} from '../graphql/queries';
    
export const fetchLists = async (houseHoldId) => {
  try {
    const lists = await API.graphql(
      {
        query: listsByHouseHoldId,
        variables: { houseHoldId: houseHoldId },
        authMode: "LAMBDA"
      });

    return lists.data.listsByHouseHoldId.items;

  } catch (error) {
    console.log("ERROR fetching Lists ", error)
    return [];
  }
}

export const fetchItemsByListId = async (listId) => {
  try {
    const items = await API.graphql({
      query: itemsByListId,
      variables: { listId: listId },
      authMode: "LAMBDA"
    });

    return items.data.itemsByListId.items;
  } catch (error) {
    console.log("ERROR fetching Items ", error)
    return [];
  }
}

export const fetchTasksByHouseHoldId = async (houseHoldId) => {
  try {
    const tasks = await API.graphql({
      query: tasksByHouseHoldId,
      variables: { houseHoldId: houseHoldId },
      authMode: "LAMBDA"
    });

    return tasks.data.tasksByHouseHoldId.items;
  } catch (error) {
    console.log("ERROR fetching Tasks ", error)
    return [];
  }
}

export const fetchEventHandlerById = async (eventHandlerId) => {
  try {
    const eventHandler = await API.graphql({
      query:
        `query MyQuery($id: ID!) {
          getEventHandler(id: $id) {
            _deleted
            _lastChangedAt
            _version
            calendarId
            createdAt
            endDate
            eventHandlerTaskId
            frequency
            id
            sourceDate
            taskId
            upcomingEventId
            title
            updatedAt
          }
        }`,
      variables: { id: eventHandlerId },
      authMode: "LAMBDA"
    });

    return eventHandler.data.getEventHandler;
  } catch (error) {
    console.log("ERROR fetching Event Handler ", error)
    return null;
  }
}

export const fetchEventHandlersByCalendarId = async (calendarId) => {
  try {
    const eventHandlers = await API.graphql({
      query: eventHandlersByCalendarId,
      variables: { calendarId: calendarId },
      authMode: "LAMBDA"
    });

    return eventHandlers.data.eventHandlersByCalendarId.items;
  } catch (error) {
    console.log("ERROR fetching Event Handlers ", error)
    return [];
  }
}

export const fetchEventsByCalendarId = async (calendarId) => {
  try {
    const events = await API.graphql({
      query: eventsByCalendarId,
      variables: { calendarId: calendarId },
      authMode: "LAMBDA",
    });

    return events.data.eventsByCalendarId.items;
  } catch (error) {
    console.log("ERROR fetching Events ", error)
    return [];
  }
}

export const fetchHouseHolds = async () => {
  try {
    const houseHolds = await API.graphql({
      query: listHouseHolds,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: await getCognitoToken()
    });

    return houseHolds.data.listHouseHolds.items;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const fetchHouseHold = async (houseHoldId) => {
  try {
    const houseHold = await API.graphql({
      query:
        `query GetHouseHold($id: ID!) {
          getHouseHold(id: $id) {
            id
            name
            owners
            calendarId
            chatRoomId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            houseHoldCalendarId
            houseHoldChatRoomId
          }
        }`,
      variables: {
        id: houseHoldId
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: await getCognitoToken(),
    });

    return houseHold.data.getHouseHold;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchHouseHoldMembers = async () => {
  try {
    const houseHoldMembers = await API.graphql({
      query: listHouseHoldMembers,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: await getCognitoToken(),
    });

    return houseHoldMembers.data.listHouseHoldMembers.items;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const fetchHouseHoldMembersByHouseHoldId = async (houseHoldId) => {
  try {
    const houseHoldMembers = await API.graphql({
      query: houseHoldMembersByHouseHoldId,
      variables: { houseHoldId: houseHoldId },
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: await getCognitoToken(),
    });

    return houseHoldMembers.data.houseHoldMembersByHouseHoldId.items;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getExistingEvent = async (eventId) => {
  try {
    const event = await API.graphql({
      query:
        `query GetEvent($id: ID!) {
          getEvent(id: $id) {
            _deleted
            _lastChangedAt
            _version
            calendarId
            completed
            createdAt
            date
            eventHandlerId
            eventType
            id
            nextEventId
            prevEventId
            updatedAt
          }
        }`,
      variables: {
        id: eventId
      },
      authMode: "LAMBDA"
    });

    return event.data.getEvent;
  } catch (error) {
    console.log(error);
    return null;
  }
}
