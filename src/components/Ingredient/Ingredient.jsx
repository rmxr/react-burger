import React from "react";
import styles from "./Ingredient.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import {ingredientsPropType} from "../../utils/constants";
import {useDrag} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {
  REMOVE_INGREDIENT_DETAILS_ELEMENT,
  SET_INGREDIENT_DETAILS_ELEMENT
} from "../../services/actions/IngredientDetails";


function Ingredient({element}) {
  const [modal, setModal] = React.useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({
      type: SET_INGREDIENT_DETAILS_ELEMENT,
      element: element,
    })
    setModal(true)
  };
  const closeModal = () => {
    dispatch({
      type: REMOVE_INGREDIENT_DETAILS_ELEMENT
    })
    setModal(false)
  };

  const {bun, stuffing} = useSelector(state => state.burgerConstructor);
  const count = [bun, ...stuffing].filter(item => item._id === element._id).length;

  const [{isDrag}, dragRef] = useDrag({
    type: "ingredient",
    item: element,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  return (
    <>
      <div ref={dragRef} onClick={openModal} className={styles.container} style={isDrag ? {opacity: ".1"} : {}}>
        {count > 0 && <Counter count={count} size="default" extraClass="m-1"/>}
        <img src={element.image}/>
        <div className={`${styles.priceElement} mt-1 mb-1`}>
          <p className="text text_type_digits-default mr-2">{element.price}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <div className={`${styles.text} text text_type_main-default`}>{element.name}</div>
      </div>
      {modal && <Modal onClose={closeModal}>
        <IngredientDetails/>
      </Modal>}
    </>
  )
};

Ingredient.propTypes = {
  element: ingredientsPropType,
}

export default Ingredient;