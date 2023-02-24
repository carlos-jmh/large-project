import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut }) {
  const [message, setMessage] = useState("");
  const [authMessage, setAuthMessage] = useState("");

  // Calls our API and sets Message to API reponse (should return "Hello Team!")
  const getNewMessage = () => {
    API
      .get("helloWorldApi", "/helloWorld")
      .then(receivedMessage => {
        setMessage(receivedMessage);
      })
      .catch(error => {
        setMessage("Received an error");
        console.log(error);
      });
  };

  // Calls our API. Can only be called by authenticated users
  const getAuthHello = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    const requestInfo = {
      headers: { Authorization: token }
    };

    API
      .get('mainApi', '/authHello', requestInfo)
      .then(receivedMessage => {
        setAuthMessage(receivedMessage);
      })
      .catch(error => {
        setAuthMessage("Received an error");
        console.log(error);
      });
  };

  // Runs on page load
  useEffect(() => {
    getNewMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <p>
          {authMessage}
        </p>
        <button onClick={getAuthHello}>Check if Auth</button>
        <button onClick={signOut}>Sign out</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator( App );
