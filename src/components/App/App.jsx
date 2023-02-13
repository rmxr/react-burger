import React from 'react';
import styles from "./App.module.css";
import {serverUrl} from "../../constants";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";



function App() {
  const [state, setState] = React.useState();

  React.useEffect(()=> {
    fetch(serverUrl)
        .then(res => {
            if (res.ok) {
               return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        .then(res => setState(res.data))}, [])

  return (
    <div>
        <AppHeader/>
        <main className={styles.main}>
            <BurgerIngredients props={state}/>
            <BurgerConstructor />
        </main>
    </div>
  );
}

export default App;
