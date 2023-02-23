import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

const myAPI = "helloWorldApi";
const path = "/helloWorld";

function App() {
  const [message, setMessage] = useState("");

  // Calls our API and sets Message to API reponse (should return "Hello Team!")
  const getNewMessage = async () => {
    API
      .get(myAPI, path)
      .then(response => {
        console.log(response);
        setMessage(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

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

export default App;
