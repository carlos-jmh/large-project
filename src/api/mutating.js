import {
  addUserToHouseHold,
  createList,
  deleteListCustom,
  removeUserFromHouseHold,
  updateHouseHoldMember,
} from "../graphql/mutations";

import { API } from "aws-amplify";
import { getCognitoToken } from "../utils/auth";

export const createNewList = async (
  description,
  completed,
  taskId,
  houseHoldId,
  title
) => {
  try {
    const newList = await API.graphql({
      query: `mutation CreateList($completed: Boolean = false, $description: String = "", $houseHoldId: ID = "", $taskId: ID = "", $title: String = "") {
            createList(input: {completed: $completed, description: $description, houseHoldId: $houseHoldId, taskId: $taskId, title: $title}) {
              id
              taskId
              title
              description
              houseHoldId
              completed
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
          }`,
      variables: {
        completed: completed,
        houseHoldId: houseHoldId,
        title: title,
        description: description,
        taskId: taskId,
      },
      authMode: "LAMBDA",
    });

    return newList.data.createList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const editList = async (list) => {
  try {
    const updatedList = await API.graphql({
      query: `mutation UpdateList($_version: Int!, $completed: Boolean = false, $description: String = "", $houseHoldId: ID = "", $id: ID!, $taskId: ID = "", $title: String = "") {
            updateList(input: {_version: $_version, completed: $completed, description: $description, houseHoldId: $houseHoldId, id: $id, taskId: $taskId, title: $title}) {
              id
              taskId
              title
              description
              houseHoldId
              completed
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
          }`,
      variables: {
        _version: list._version,
        id: list.id,
        completed: list.completed,
        houseHoldId: list.houseHoldId,
        title: list.title,
        description: list.description,
        taskId: list.taskId,
      },
      authMode: "LAMBDA",
    });

    return updatedList.data.createList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteList = async (listId) => {
  try {
    const deletedList = await API.graphql({
      query: deleteListCustom,
      variables: {
        listId: listId,
      },
      authMode: "LAMBDA",
    });

    return deletedList.data.deleteListCustom;
  } catch (error) {
    console.log(error);
    return null;
  }
};

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
    console.log("ERROR updating item ", error);
    return [];
  }
};

export const createNewItem = async (listId, title) => {
  try {
    const newItem = await API.graphql({
      query: `mutation CreateItem($completed: Boolean = false, $listId: ID!, $title: String!) {
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
};

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
    const newTask = await API.graphql({
      query: `mutation CreateTask($completeSourceOnComplete: Boolean = false, $completed: Boolean = false, $eventHandlerId: ID = "", $foreverTask: Boolean = false, $houseHoldId: ID = "", $itemId: ID = "", $listId: ID = "", $title: String = "") {
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
        title: title,
      },
      authMode: "LAMBDA",
    });

    return newTask.data.createTask;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const editHouseHold = async (houseHold) => {
  try {
    const updatedHouseHold = await API.graphql({
      query: `mutation UpdateHouseHold($id: ID!, $name: String!) {
            updateHouseHold(input: {id: $id, name: $name}) {
              _lastChangedAt
              _deleted
              _version
              createdAt
              houseHoldCalendarId
              houseHoldChatRoomId
              id
              name
              owners
              updatedAt
            }
          }`,
      variables: {
        input: {
          id: houseHold.id,
          name: houseHold.name,
          _version: houseHold._version,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: await getCognitoToken(),
    });

    return updatedHouseHold.data.updateHouseHold;
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
          _version: houseHoldMember._version,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: await getCognitoToken(),
    });

    return editedHouseHoldMember.data.updateHouseHoldMember;
  } catch (error) {
    console.log(error);
    return null;
  }
};
