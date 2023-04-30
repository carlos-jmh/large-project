import { API } from "aws-amplify";
import { getCognitoToken } from '../utils/auth';
import { onNewItemCreated, onItemUpdated, onItemDeleted } from '../graphql/subscriptions';

export const createSubListItems = async (listId, setHouseHold, callback) => {
  const token = await getCognitoToken();

  const subscription = API.graphql(
    {
      query: onNewItemCreated,
      variables: { listId: listId },
    },
    { Authorization: `Banana ${token}` }
  ).subscribe({
    next: (data) =>
      callback(data.value.data.onNewItemCreated, listId, setHouseHold),
    error: (error) => console.log(error),
  });

  return Promise.resolve(subscription);
};

export const updateSubListItems = async (listId, setHouseHold, callback) => {
  const token = await getCognitoToken();

  const subscription = API.graphql(
    {
      query: onItemUpdated,
      variables: { listId: listId },
    },
    { Authorization: `Banana ${token}` }
  ).subscribe({
    next: (data) =>
      callback(data.value.data.onItemUpdated, listId, setHouseHold),
    error: (error) => console.log(error),
  });

  return Promise.resolve(subscription);
}

export const deleteSubListItems = async (listId, listIndex, setHouseHold, callback) => {
  const token = await getCognitoToken();

  const subscription = API.graphql({
    query: onItemDeleted,
    variables: { listId: listId },
  }, { Authorization: `Banana ${token}` }
  ).subscribe({
    next: (data) => callback(data.value.data.onItemDeleted, listIndex, setHouseHold),
    error: (error) => console.log(error)
  });

  return Promise.resolve(subscription);
}
