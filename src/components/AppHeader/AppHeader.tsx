import React from "react";
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import HeaderButton from "../HeaderButton/HeaderButton";
import {Link} from "react-router-dom";

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerGrid}>
        <div className={styles.leftBlock}>
          <HeaderButton text={"Конструктор"} type={"burger"} href={'/'}/>
          <HeaderButton text={"Лента заказов"} type={"list"} href={'/lenta'}/>
        </div>
        <Link to={"/"}><Logo/></Link>
        <div className={styles.rightBlock}>
          <HeaderButton text={"Личный кабинет"} type={"profile"} href={'/profile'}/>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;