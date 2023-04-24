import { API } from "aws-amplify";
import { getCognitoToken } from '../components/AuthUser';
import { onNewItemCreated, onItemUpdated } from '../graphql/subscriptions';

export const createSubListItems = async (listId, listIndex, callback) => {
    const token = await getCognitoToken();

    const subscription = API.graphql(
      {
        query: onNewItemCreated,
        variables: { listId: listId },
      },
      { Authorization: `Banana ${token}` }
    ).subscribe({
      next: (data) => callback(data.value.data.onNewItemCreated, listIndex),
      error: (error) => console.log(error)
    });

    return subscription;
}

export const updateSubListItems = async (listId, listIndex, callback) => {
  const token = await getCognitoToken();

  const subscription = API.graphql(
    {
      query: onItemUpdated,
      variables: { listId: listId },
    },
    { Authorization: `Banana ${token}` }
  ).subscribe({
    next: (data) => callback(data.value.data.onItemUpdated, listIndex),
    error: (error) => console.log(error)
  });

  return subscription;
}
