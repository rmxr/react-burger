import React from "react";
import styles from "./BurgerConstructor.module.css";
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorListItem from "../BurgerConstructorListItem/BurgerConstructorListItem";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";

import LargeIcon from "../../images/LargeIcon.svg";
import {ingredientsPropType} from "../../utils/constants";


function BurgerConstructor({props}) {
    const [modal, setModal] = React.useState(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <section className={`${styles.container} pt-25`}>
            <div className={styles.listWithBuns}>
                <div className={styles.bun}>
                    {props && props.map((item, index) => item.name === 'Краторная булка N-200i' &&
                    <ConstructorElement
                    key={index}
                    type="top"
                    isLocked={true}
                    text={item.name + " (верх)"}
                    price={item.price}
                    thumbnail={item.image}
                    />)}
                </div>
                <ul className={styles.stuffing}>
                    {props && props.map((item, index) => item.type !== "bun" && <BurgerConstructorListItem key={index} text={item.name} price={item.price} thumbnail={item.image} />)}
                </ul>
                <div className={styles.bun}>
                    {props && props.map((item, index) => item.name === 'Краторная булка N-200i' &&
                        <ConstructorElement
                            key={index}
                            type="bottom"
                            isLocked={true}
                            text={item.name + " (низ)"}
                            price={item.price}
                            thumbnail={item.image}
                        />)}
                </div>
            </div>
            <div className={`${styles.priceAndOrder} mt-10 mr-4`}>
                <div className={`${styles.price} mr-10`}>
                    <p className="text text_type_digits-medium mr-2">610</p>
                    <img alt="Космобаксы" src={LargeIcon}></img>
                </div>
                <Button onClick={openModal} htmlType="button" type="primary" size="medium">
                    Оформить заказ
                </Button>
                {modal && <Modal onClose={closeModal}>
                    <OrderDetails/>
                    </Modal>}
            </div>
        </section>
    )
};

BurgerConstructor.propTypes = {
    props: PropTypes.arrayOf(ingredientsPropType)
};

export default BurgerConstructor;