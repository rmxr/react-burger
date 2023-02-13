import React from "react";
import styles from "./BurgerConstructorListItem.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

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
};

BurgerConstructorListItem.propTypes = {
    text: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
}

export default BurgerConstructorListItem;