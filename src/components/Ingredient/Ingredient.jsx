import React from "react";
import styles from "./Ingredient.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Ingredient({name, price, image}){
    console.log(name, price, image)
    return(
        <div className={styles.container}>
            <img src={image} />
            <div className={`${styles.priceElement} mt-1 mb-1`}>
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <div className={`${styles.text} text text_type_main-default`}>{name}</div>
        </div>
    )
};

export default Ingredient;