import React from "react";
import styles from "./Ingredient.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";


function Ingredient({name, price, image, info}){
    const [modal, setModal] = React.useState(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    return(
        <>
            <div onClick={openModal} className={styles.container}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={image} />
            <div className={`${styles.priceElement} mt-1 mb-1`}>
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <div className={`${styles.text} text text_type_main-default`}>{name}</div>
        </div>
            {modal && <Modal onClose={closeModal}>
                <IngredientDetails info={info} />
            </Modal>}
        </>
    )
};

Ingredient.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    info: PropTypes.object,
}

export default Ingredient;