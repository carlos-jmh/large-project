import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getCognitoToken } from './components/AuthUser';
import { Amplify, API} from 'aws-amplify';
import Config from "./aws-exports"

Amplify.configure(Config);
// Want API to use this graphql header -> "Banana <token>"
API.configure({
  graphql_headers: async () => {
    const token = await getCognitoToken();
    return { Authorization: `Banana ${token}` };
  },
});
API.configure(Config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
