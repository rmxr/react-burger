import React from "react";
import styles from "./BurgerIngredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from "prop-types";
import {ingredientsPropType} from "../../utils/constants";



function BurgerIngredients({props}) {
    const [current, setCurrent] = React.useState('one');

    return (
        <section className={styles.container}>
            <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
            <div className="mt-5" style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <section className={`${styles.scroll} mt-10`}>
                <ul className={styles.list}>
                    <li>
                        <h3 className="text text_type_main-medium">Булки</h3>
                        <ul className={styles.ingredients}>
                            {props && props
                                .filter(item => item.type === "bun")
                                .map(item => <Ingredient info={item} key={item._id} name={item.name} price={item.price} image={item.image} />)}
                        </ul>
                    </li>
                    <li>
                        <h3 className="text text_type_main-medium">Соусы</h3>
                        <ul className={styles.ingredients}>
                            {props && props
                                .filter(item => item.type === "sauce")
                                .map(item => <Ingredient info={item} key={item._id} name={item.name} price={item.price} image={item.image} />)}
                        </ul>
                    </li>
                    <li>
                        <h3 className="text text_type_main-medium">Начинки</h3>
                        <ul className={styles.ingredients}>
                            {props && props
                                .filter(item => item.type === "main")
                                .map(item => <Ingredient info={item} key={item._id} name={item.name} price={item.price} image={item.image} />)}
                        </ul>
                    </li>
                </ul>
            </section>
        </section>
    )
};

BurgerIngredients.propTypes = {
    props: PropTypes.arrayOf(ingredientsPropType)
};

export default BurgerIngredients;

