import { Amplify } from "aws-amplify";
import { API } from "aws-amplify";
import App from "./components/App";
import awsconfig from "./aws-exports";
import { registerRootComponent } from "expo";

Amplify.configure(awsconfig);
API.configure(awsconfig);

registerRootComponent(App);
