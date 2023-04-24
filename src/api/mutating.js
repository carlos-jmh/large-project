import { API } from "aws-amplify";
import { getCognitoToken } from '../components/AuthUser';

export const updateExistingItem = async (item) => {
  try {
    const token = await getCognitoToken();

    const updatedItem = await API.graphql(
      {
        query:
          `mutation UpdateItem($_version: Int!, $completed: Boolean!, $id: ID!, $title: String!) {
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
          completed: item.complete,
          id: item.id,
          title: item.task,
        },
      },
      { Authorization: `Banana ${token}` });
    
    return updatedItem.data.updateItem;
  } catch (error) {
    console.log("ERROR updating item ", error)
    return [];
  }
}

export const createNewItem = async (listId, title) => {
  try {
    const token = await getCognitoToken();

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
            title: title
        }
      },
      { Authorization: `Banana ${token}` }
    )

    return newItem.data.createItem;
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
    const token = await getCognitoToken();

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
        }
      }, { Authorization: `Banana ${token}` }
    );

    return newTask.data.createTask;
  } catch (error) {
    console.log(error);
    return null;
  }
}
