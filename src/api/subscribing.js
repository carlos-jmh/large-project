import {
  onItemDeleted,
  onItemUpdated,
  onNewItemCreated,
} from "../graphql/subscriptions";

import { API } from "aws-amplify";
import { getCognitoToken } from "../utils/auth";

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
};

export const deleteSubListItems = async (listId, setHouseHold, callback) => {
  const token = await getCognitoToken();

  const subscription = API.graphql(
    {
      query: onItemDeleted,
      variables: { listId: listId },
    },
    { Authorization: `Banana ${token}` }
  ).subscribe({
    next: (data) =>
      callback(data.value.data.onItemDeleted, listId, setHouseHold),
    error: (error) => console.log(error),
  });

  return Promise.resolve(subscription);
};
