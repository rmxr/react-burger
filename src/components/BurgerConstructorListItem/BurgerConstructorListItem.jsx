import React from "react";
import styles from "./BurgerConstructorListItem.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructorListItem({text, price, thumbnail}) {
    return (
        <li className={styles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={text}
                price={price}
                thumbnail={thumbnail}
            />
        </li>
    )
}

export default BurgerConstructorListItem;