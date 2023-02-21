import React from "react";
import styles from "./BurgerConstructorListItem.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {REMOVE_INGREDIENT_FROM_CONSTRUCTOR} from "../../services/actions/BurgerConstructor";

function BurgerConstructorListItem({text, price, thumbnail, constructorIndex}) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch({
      type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
      constructorIndex: constructorIndex,
    })
  };

  return (
    <li className={styles.item}>
      <DragIcon type="primary"/>
      <ConstructorElement
        handleClose={deleteHandler}
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