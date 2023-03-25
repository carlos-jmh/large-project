import { registerRootComponent } from "expo";

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

import App from "./components/App";
registerRootComponent(App);
