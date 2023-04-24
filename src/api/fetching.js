import { API } from "aws-amplify";
import { eventHandlersByCalendarId, eventsByCalendarId, itemsByListId, listsByHouseHoldId, tasksByHouseHoldId } from '../graphql/queries';
import { getCognitoToken } from '../components/AuthUser';

export const fetchLists = async (houseHoldId) => {
  try {
    const token = await getCognitoToken();

    const lists = await API.graphql(
      {
        query: listsByHouseHoldId,
        variables: { houseHoldId: houseHoldId },
      },
      { Authorization: `Banana ${token}` });

    return lists.data.listsByHouseHoldId.items;

  } catch (error) {
    console.log("ERROR fetching Lists ", error)
    return [];
  }
}

export const fetchItemsByListId = async (listId) => {
  try {
    const token = await getCognitoToken();

    const items = await API.graphql({
      query: itemsByListId,
      variables: { listId: listId },
    }, { Authorization: `Banana ${token}` });

    return items.data.itemsByListId.items;
  } catch (error) {
    console.log("ERROR fetching Items ", error)
    return [];
  }
}

export const fetchTasksByHouseHoldId = async (houseHoldId) => {
  try {
    const token = await getCognitoToken();

    const tasks = await API.graphql({
      query: tasksByHouseHoldId,
      variables: { houseHoldId: houseHoldId },
    }, { Authorization: `Banana ${token}` });

    return tasks.data.tasksByHouseHoldId.items;
  } catch (error) {
    console.log("ERROR fetching Tasks ", error)
    return [];
  }
}

export const fetchEventHandlersByCalendarId = async (calendarId) => {
  try {
    const token = await getCognitoToken();

    const eventHandlers = await API.graphql({
      query: eventHandlersByCalendarId,
      variables: { calendarId: calendarId },
    }, { Authorization: `Banana ${token}` });

    return eventHandlers.data.eventHandlersByCalendarId.items;
  } catch (error) {
    console.log("ERROR fetching Event Handlers ", error)
    return [];
  }
}

export const fetchEventsByCalendarId = async (calendarId) => {
  try {
    const token = await getCognitoToken();

    const events = await API.graphql({
      query: eventsByCalendarId,
      variables: { calendarId: calendarId },
    }, { Authorization: `Banana ${token}` });

    return events.data.eventsByCalendarId.items;
  } catch (error) {
    console.log("ERROR fetching Events ", error)
    return [];
  }
}
