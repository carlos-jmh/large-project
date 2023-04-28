import { Amplify } from "aws-amplify";
import { API } from "aws-amplify";
import App from "./components/App";
import awsconfig from "./aws-exports";
import { registerRootComponent } from "expo";
import { getCognitoToken } from "./utils/auth";

Amplify.configure(awsconfig);
API.configure({
    API: {
        graphql_headers: async () => {
            const token = await getCognitoToken();
            return { Authorization: `Banana ${token}` };
        }
    }
});
API.configure(awsconfig);

registerRootComponent(App);
