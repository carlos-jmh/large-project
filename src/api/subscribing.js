import { onItemUpdated, onNewItemCreated } from "../graphql/subscriptions";

import { API } from "aws-amplify";
import { getCognitoToken } from "../utils/auth";

export const createSubListItems = async (listId, setListData, callback) => {
  const token = await getCognitoToken();

  const subscription = API.graphql(
    {
      query: onNewItemCreated,
      variables: { listId: listId },
    },
    { Authorization: `Banana ${token}` }
  ).subscribe({
    next: (data) =>
      callback(data.value.data.onNewItemCreated, listId, setListData),
    error: (error) => console.log(error),
  });

  return Promise.resolve(subscription);
};

export const updateSubListItems = async (listId, setListData, callback) => {
  const token = await getCognitoToken();

  const subscription = API.graphql(
    {
      query: onItemUpdated,
      variables: { listId: listId },
    },
    { Authorization: `Banana ${token}` }
  ).subscribe({
    next: (data) =>
      callback(data.value.data.onItemUpdated, listId, setListData),
    error: (error) => console.log(error),
  });

  return Promise.resolve(subscription);
};
