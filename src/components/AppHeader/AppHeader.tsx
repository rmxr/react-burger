import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import HeaderButton from "../HeaderButton/HeaderButton";

function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.headerGrid}>
                <div className={styles.leftBlock}>
                    <HeaderButton text={"Конструктор"} type={"burger"} active={true} />
                    <HeaderButton text={"Лента заказов"} type={"list"} active={false} />
                </div>
                <Logo/>
                <div className={styles.rightBlock}>
                    <HeaderButton text={"Личный кабинет"} type={"profile"} active={false}/>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;