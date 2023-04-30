import {
  addUserToHouseHold,
  createList,
  deleteListCustom,
  removeUserFromHouseHold,
  updateHouseHoldMember,
} from "../graphql/mutations";

import { API } from "aws-amplify";
import { getCognitoToken } from "../utils/auth";
import {
  addUserToHouseHold,
  removeUserFromHouseHold,
  updateHouseHoldMember,
  createNewHouseHold,
  deleteTask,
  createEventHandler,
  updateEventHandler,
  deleteEventHandler,
  deleteEvent,
} from "../graphql/mutations";

export const createNewList = async (houseHoldId, title) => {
  try {
    const newList = await API.graphql({
      query:
        `mutation CreateList($completed: Boolean = false, $houseHoldId: ID!, $title: String!) {
          createList(input: {completed: $completed, houseHoldId: $houseHoldId, title: $title}) {
            _deleted
            _lastChangedAt
            _version
            completed
            createdAt
            description
            houseHoldId
            id
            taskId
            title
            updatedAt
          }
        }
        `,
      variables: {
        houseHoldId: houseHoldId,
        title: title
      },
      authMode: "LAMBDA"
    },);
    return newList.data.createList;
  }
  catch (error) {
    console.log("ERROR creating list ", error);
    return null;
  }
}

export const deleteExistingList = async (listId) => {
  try {
    const deletedList = await API.graphql({
      query: `mutation MyMutation($listId: String!) {
        deleteListCustom(listId: $listId)
      }`,
      variables: {
        listId: listId
      },
      authMode: "LAMBDA"
    });

    return deletedList.data.deleteListCustom;
  } catch (error) {
    console.log("ERROR deleting list ", error);
    return null;
  }
}

export const editExistingList = async (list) => {
  try {
    const updatedList = await API.graphql({
      query: `mutation UpdateList($_version: Int = 0, $completed: Boolean = false, $description: String = "", $houseHoldId: ID = "", $id: ID = "", $listTaskId: ID = "", $taskId: ID = "", $title: String = "") {
        updateList(input: {id: $id, title: $title, taskId: $taskId, listTaskId: $listTaskId, houseHoldId: $houseHoldId, description: $description, completed: $completed, _version: $_version}) {
          _deleted
          _lastChangedAt
          _version
          completed
          createdAt
          description
          houseHoldId
          id
          listTaskId
          taskId
          title
          updatedAt
        }
      }`,
      variables: {
        _version: list._version,
        completed: list.completed,
        description: list.description,
        houseHoldId: list.houseHoldId,
        id: list.id,
        listTaskId: list.listTaskId,
        taskId: list.taskId,
        title: list.title
      },
      authMode: "LAMBDA"
    });

    return updatedList.data.updateList;
  } catch (error) {
    console.log("ERROR updating list ", error);
    return null;
  }
}

export const updateExistingItem = async (item) => {
  try {
    const updatedItem = await API.graphql({
      query: `mutation UpdateItem($_version: Int!, $completed: Boolean!, $id: ID!, $title: String!) {
            updateItem(input: {id: $id, completed: $completed, _version: $_version, title: $title}) {
              id
              listId
              title
              completed
              _version
              _deleted
              _lastChangedAt
              createdAt
              description
              itemTaskId
              updatedAt
            }
          }`,
      variables: {
        _version: item._version,
        completed: item.completed,
        id: item.id,
        title: item.title,
      },
      authMode: "LAMBDA",
    });

    return updatedItem.data.updateItem;
  } catch (error) {
    console.log("ERROR updating item ", error)
    return null;
  }
};

export const createNewItem = async (listId, title) => {
  try {
    const newItem = await API.graphql(
      {
        query:
          `mutation CreateItem($completed: Boolean = false, $listId: ID = "", $title: String = "") {
            createItem(input: {completed: $completed, listId: $listId, title: $title}) {
              id
              listId
              title
              _deleted
              _lastChangedAt
              _version
              completed
              createdAt
              description
              itemTaskId
              updatedAt
            }
          }`,
      variables: {
        listId: listId,
        title: title,
      },
      authMode: "LAMBDA",
    });

    return newItem.data.createItem;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const deleteExistingItem = async (item) => {
  try {
    const deletedItem = await API.graphql({
      query:
        `mutation MyMutation($id: ID!, $_version: Int!) {
          deleteItem(input: {id: $id, _version: $_version}) {
            _deleted
            _lastChangedAt
            _version
            completed
            createdAt
            description
            id
            itemTaskId
            listId
            taskId
            title
            updatedAt
          }
        }`,
      variables: {
        id: item.id,
        _version: item._version
      },
      authMode: "LAMBDA"
    });

    return deletedItem.data.deleteItem;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const createNewTask = async (
  completeSourceOnComplete,
  completed,
  foreverTask,
  houseHoldId,
  eventHandlerId,
  itemId,
  listId,
  title
) => {
  try {
    const newTask = await API.graphql(
      {
        query:
        `mutation CreateTask($completeSourceOnComplete: Boolean = false, $completed: Boolean = false, $eventHandlerId: ID = "", $foreverTask: Boolean = false, $houseHoldId: ID = "", $itemId: ID = "", $listId: ID = "", $title: String = "") {
          createTask(input: {completeSourceOnComplete: $completeSourceOnComplete, completed: $completed, eventHandlerId: $eventHandlerId, foreverTask: $foreverTask, houseHoldId: $houseHoldId, itemId: $itemId, listId: $listId, title: $title}) {
            id
            itemId
            listId
            title
            houseHoldId
            foreverTask
            eventHandlerId
            completed
            completeSourceOnComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
        }`,
        variables: {
          completeSourceOnComplete: completeSourceOnComplete,
          completed: completed,
          eventHandlerId: eventHandlerId,
          foreverTask: foreverTask,
          houseHoldId: houseHoldId,
          itemId: itemId,
          listId: listId,
          title: title
        },
        authMode: "LAMBDA"
      }
    );

    return newTask.data.createTask;
  } catch (error) {
    console.log("ERROR creating task ", error);
    return null;
  }
}
  
export const updateExistingTask = async (task) => {
  try {
    const updatedTask = await API.graphql(
      {
        query:
          `mutation UpdateTask($id: ID!, $completeSourceOnComplete: Boolean = false, $foreverTask: Boolean = false, $eventHandlerId: ID = "", $itemId: ID = "", $listId: ID = "", $title: String = "", $_version: Int!) {
            updateTask(input: {id: $id, title: $title, listId: $listId, itemId: $itemId, foreverTask: $foreverTask, eventHandlerId: $eventHandlerId, completeSourceOnComplete: $completeSourceOnComplete, _version: $_version}) {
              _deleted
              _lastChangedAt
              _version
              completeSourceOnComplete
              completed
              createdAt
              eventHandlerId
              foreverTask
              houseHoldId
              id
              itemId
              listId
              pointValue
              title
              updatedAt
            }
          }`,
        variables: {
          id: task.id,
          completeSourceOnComplete: task.completeSourceOnComplete,
          foreverTask: task.foreverTask,
          eventHandlerId: task.eventHandlerId,
          itemId: task.itemId,
          listId: task.listId,
          title: task.title,
          _version: task._version,
        },
        authMode: "LAMBDA"
      },
    );

    return updatedTask.data.updateTask;
  } catch (error) {
    console.log("ERROR updating task ", error)
    return null;
  }
}

export const deleteExistingTask = async (taskId) => {
  try {
    const deletedTask = await API.graphql({
      query: deleteTask,
      variables: {
        taskId: taskId
      },
      authMode: "LAMBDA"
    });

    return deletedTask.data.deleteTask;
  } catch (error) {
    console.log("ERROR deleting task ", error);
    return null;
  }
}

export const createHouseHold = async (name) => {
  try {
    const newHouseHold = await API.graphql({
      query: createNewHouseHold,
      variables: {
        houseHoldName: name
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: await getCognitoToken()
    });

    return newHouseHold.data.createNewHouseHold;
  } catch (error) {
    console.log("ERROR creating house hold ", error);
    return null;
  }
}

export const editHouseHold = async (houseHold) => {
  try {
    const updatedHouseHold = await API.graphql(
      {
        query:
        `mutation MyMutation($_version: Int!, $id: ID!, $name: String!) {
          updateHouseHold(input: {id: $id, name: $name, _version: $_version}) {
            id
            name
            _version
            calendarId
            chatRoomId
            createdAt
            owners
            updatedAt
            houseHoldChatRoomId
            houseHoldCalendarId
            _lastChangedAt
            _deleted
          }
        }`,
        variables: {
          
            id: houseHold.id,
            name: houseHold.name,
            _version: houseHold._version
          
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
        authToken: await getCognitoToken()
      }
    );

    return updatedHouseHold.data.updateHouseHold;
  } catch (error) {
    console.log("ERROR updating HouseHold ", error);
    return null;
  }
};

export const addUser = async (houseHoldId, username) => {
  try {
    const addedUser = await API.graphql({
      query: addUserToHouseHold,
      variables: {
        houseHoldId: houseHoldId,
        cognitoUsername: username,
      },
      authMode: "LAMBDA",
    });

    return addedUser.data.addUserToHouseHold;
  } catch (error) {
    console.log("ERROR adding user to house hold ", error);
    return null;
  }
};

export const removeUser = async (houseHoldId, houseHoldMemberId) => {
  try {

    const removedUser = await API.graphql({
      query: removeUserFromHouseHold,
      variables: {
        houseHoldId: houseHoldId,
        houseHoldMemberId: houseHoldMemberId,
      },
      authMode: "LAMBDA",
    });

    return removedUser.data.removeUserFromHouseHold;
  } catch (error) {
    console.log("ERROR removing user from house hold ", error);
    return null;
  }
};

export const editHouseHoldMember = async (houseHoldMember) => {
  try {
    const editedHouseHoldMember = await API.graphql({
      query: updateHouseHoldMember,
      variables: {
        input: {
          id: houseHoldMember.id,
          nickname: houseHoldMember.nickname,
          _version: houseHoldMember._version
        }
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: await getCognitoToken()
    });

    return editedHouseHoldMember.data.updateHouseHoldMember;
  } catch (error) {
    console.log("ERROR editing house hold member ", error);
    return null;
  }
}

// EventHandler

export const generateEventHandler = async (
  calendarId,
  taskId,
  frequency,
  sourceDate,
  endDate,
  eventType
) => {
  try {
    const newEventHandler = await API.graphql(
      {
        query: createEventHandler,
        variables: {
          calendarId,
          taskId,
          frequency,
          sourceDate,
          endDate,
          eventType,
        },
        authMode: "LAMBDA"
      }
    );

    return newEventHandler.data.createEventHandler;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const editEventHandler = async (
  eventHandlerId,
  calendarId,
  taskId,
  frequency,
  sourceDate,
  endDate,
  eventType
) => {
  try {
    const updatedEventHandler = await API.graphql(
      {
        query: updateEventHandler,
        variables: {
          eventHandlerId,
          calendarId,
          taskId,
          frequency,
          sourceDate,
          endDate,
          eventType,
        },
        authMode: "LAMBDA"
      }
    );

    return updatedEventHandler.data.updateEventHandler;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const removeEventHandler = async (
  eventHandlerId,
) => {
  try {
    const deletedEventHandler = await API.graphql(
      {
        query: deleteEventHandler,
        variables: {
          eventHandlerId,
        },
        authMode: "LAMBDA"
      }
    );

    return deletedEventHandler.data.deleteEventHandler;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Event

export const editEvent = async (
  eventId,
  eventHandlerId,
  calendarId,
  completed,
  date,
  eventType,
  prevEventId,
  nextEventId,
  _version
) => {
  try {
    const updatedEvent = await API.graphql(
      {
        query:
        `mutation UpdateEvent($id: ID!, $eventHandlerId: ID!, $calendarId: ID!, $completed: Boolean!, $date: AWSDateTime!, $eventType: EVENTTYPE!, $prevEventId: ID!, $nextEventId: ID!, $_version: Int!) {
          updateEvent(input: {id: $id, eventHandlerId: $eventHandlerId, calendarId: $calendarId, completed: $completed, date: $date, eventType: $eventType, prevEventId: $prevEventId, nextEventId: $nextEventId, _version: $_version}) {
            id
            date
            eventType
            completed
            prevEventId
            nextEventId
            eventHandlerId
            calendarId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
        }`,
        variables: {
          id: eventId,
          eventHandlerId,
          calendarId,
          completed,
          date,
          eventType,
          prevEventId,
          nextEventId,
          _version
        },
        authMode: "LAMBDA"
      }
    );

    return updatedEvent.data.updateEvent;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const removeEvent = async (eventId) => {
  try {
    const deletedEvent = await API.graphql(
      {
        query: deleteEvent,
        variables: {
          eventId: eventId,
        },
        authMode: "LAMBDA"
      }
    );

    return deletedEvent.data.deleteEvent;
  } catch (error) {
    console.log(error);
    return null;
  }
}
