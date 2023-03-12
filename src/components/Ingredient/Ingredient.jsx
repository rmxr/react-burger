import React from "react";
import styles from "./Ingredient.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientsPropType} from "../../utils/constants";
import {useDrag} from "react-dnd";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {useLocation, useNavigate} from "react-router-dom";


function Ingredient({element}) {

  const {bun, stuffing} = useSelector(state => state.burgerConstructor);
  const count = [bun, ...stuffing].filter(item => item._id === element._id).length;
  const navigate = useNavigate();
  const location = useLocation();

  const [{isDrag}, dragRef] = useDrag({
    type: "ingredient",
    item: element,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  return (
    <div ref={dragRef} onClick={() => navigate(`/ingredients/${element._id}`, {state: {background: location}})}
         className={styles.container}
         style={isDrag ? {opacity: ".1"} : {}}>
      {count > 0 && <Counter count={count} size="default" extraClass="m-1"/>}
      <img src={element.image} alt={element.name}/>
      <div className={`${styles.priceElement} mt-1 mb-1`}>
        <p className="text text_type_digits-default mr-2">{element.price}</p>
        <CurrencyIcon type="primary"/>
      </div>
      <div className={`${styles.text} text text_type_main-default`}>{element.name}</div>
    </div>
  )
};

Ingredient.propTypes = {
  element: ingredientsPropType,
  openModal: PropTypes.func,
}

export default Ingredient;