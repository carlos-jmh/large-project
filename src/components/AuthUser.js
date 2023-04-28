import { Auth } from "aws-amplify";

export const getCognitoToken = async () => {
  const session = await Auth.currentSession();
  return session.getAccessToken().getJwtToken();
}

export const getCognitoUser = async () => {
  return await Auth.currentAuthenticatedUser();
}
