import { API } from "aws-amplify";
import { getCognitoToken } from '../components/AuthUser';
import { onNewItemCreated, onItemUpdated } from '../graphql/subscriptions';

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
