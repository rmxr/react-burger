import React from 'react';
import styles from "./App.module.css";
import {serverUrl} from "../../constants";
import AppHeader from "../AppHeader/AppHeader";



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
        .catch(err => console.error((err)))
  }, [])

  return (
    <div>
        <AppHeader/>
    </div>
  );
}

export default App;
