import React from "react";
import {ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import HeaderButton from "../HeaderButton/HeaderButton";

function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.headerGrid}>
                <div className={styles.leftBlock}>
                    <HeaderButton text={"Конструктор"}>
                        <BurgerIcon type="primary"/>
                    </HeaderButton>
                    <HeaderButton text={"Лента заказов"}>
                        <ListIcon type="primary"/>
                    </HeaderButton>
                </div>
                <Logo/>
                <div className={styles.rightBlock}><HeaderButton text={"Личный кабинет"}>
                    <ProfileIcon type="primary"/>
                </HeaderButton></div>
            </div>
        </header>
    )
}

export default AppHeader;