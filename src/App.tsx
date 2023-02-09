import React from 'react';
import logo from './logo.svg';
import './App.css';
import {serverUrl} from "./constants";



function App() {
  const [data, setData] = React.useState();

  React.useEffect(()=> {
    fetch(serverUrl)
        .then(res => {
            if (res.ok) {
               return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        .then(data => setData(data.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Привет <code>лунатикам!</code>
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
