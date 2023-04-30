import { API } from "aws-amplify";
import { getCognitoToken } from '../components/AuthUser';
import { onNewItemCreated, onItemUpdated, onItemDeleted } from '../graphql/subscriptions';

export const createSubListItems = async (listId, listIndex, setListData, callback) => {
    const token = await getCognitoToken();

    const subscription = API.graphql(
      {
        query: onNewItemCreated,
        variables: { listId: listId },
      },
      { Authorization: `Banana ${token}` }
    ).subscribe({
      next: (data) => callback(data.value.data.onNewItemCreated, listIndex, setListData),
      error: (error) => console.log(error)
    });

    return Promise.resolve(subscription);
}

export const updateSubListItems = async (listId, listIndex, setListData, callback) => {
  const token = await getCognitoToken();

  const subscription = API.graphql(
    {
      query: onItemUpdated,
      variables: { listId: listId },
    },
    { Authorization: `Banana ${token}` }
  ).subscribe({
    next: (data) => callback(data.value.data.onItemUpdated, listIndex, setListData),
    error: (error) => console.log(error)
  });

  return Promise.resolve(subscription);
}

export const deleteSubListItems = async (listId, listIndex, setListData, callback) => {
  const token = await getCognitoToken();

  const subscription = API.graphql({
    query: onItemDeleted,
    variables: { listId: listId },
  }, { Authorization: `Banana ${token}` }
  ).subscribe({
    next: (data) => callback(data.value.data.onItemDeleted, listIndex, setListData),
    error: (error) => console.log(error)
  });

  return Promise.resolve(subscription);
}
