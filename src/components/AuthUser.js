import { Auth } from "aws-amplify";

export const getCognitoToken = async () => {
  const user = await Auth.currentAuthenticatedUser();
  return user.signInUserSession.accessToken.jwtToken;
}

export const getCognitoUser = async () => {
  return await Auth.currentAuthenticatedUser();
}