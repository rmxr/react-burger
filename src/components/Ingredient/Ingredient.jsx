import React from "react";
import styles from "./Ingredient.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import {ingredientsPropType} from "../../utils/constants";
import {useDrag} from "react-dnd";


function Ingredient({name, price, image, info, id}) {
  const [modal, setModal] = React.useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const [{isDrag}, dragRef] = useDrag({
    type: "ingredient",
    item: info,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  return (
    <>
      <div ref={dragRef} onClick={openModal} className={styles.container} style={isDrag ? {opacity: ".2"} : {}}>
        <Counter count={1} size="default" extraClass="m-1"/>
        <img src={image}/>
        <div className={`${styles.priceElement} mt-1 mb-1`}>
          <p className="text text_type_digits-default mr-2">{price}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <div className={`${styles.text} text text_type_main-default`}>{name}</div>
      </div>
      {modal && <Modal onClose={closeModal}>
        <IngredientDetails info={info}/>
      </Modal>}
    </>
  )
};

Ingredient.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  info: ingredientsPropType,
}

export default Ingredient;