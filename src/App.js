import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { echo } from './graphql/queries';
import { useState } from 'react';
import awsConfig from './aws-exports';
Amplify.configure(awsConfig);

function App({ signOut }) {
  const [msg, setMsg] = useState("");

  const doSomething = async () => {
    const msg = "hello there!"

    await API.graphql(
      graphqlOperation(
        echo,
        { msg },
      )
    ).then(response => {
      console.log(response);
      setMsg("Received!");
    }).catch(error => {
      setMsg("Error: ", error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { msg }
        </p>
        <button onClick={doSomething}>Test</button>
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
