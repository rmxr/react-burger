import React from "react";
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import HeaderButton from "../HeaderButton/HeaderButton";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants/routes";

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerGrid}>
        <div className={styles.leftBlock}>
          <HeaderButton text={"Конструктор"} type={"burger"} href={ROUTES.home}/>
          <HeaderButton text={"Лента заказов"} type={"list"} href={ROUTES.feed}/>
        </div>
        <Link to={"/"}><Logo/></Link>
        <div className={styles.rightBlock}>
          <HeaderButton text={"Личный кабинет"} type={"profile"} href={ROUTES.profile}/>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;