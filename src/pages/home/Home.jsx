import React from 'react';
import styles from "./Home.module.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


function Home() {

  return (
    <>
      <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </DndProvider>
      </main>
    </>
  );
}

export default Home;
