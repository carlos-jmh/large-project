import { API } from "aws-amplify";
import { getCognitoToken } from "../utils/auth";
import {
  eventHandlersByCalendarId,
  eventsByCalendarId,
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

export const fetchHouseHoldMembers = async (houseHoldId) => {
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
