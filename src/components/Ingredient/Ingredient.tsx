import React from "react";
import styles from "./Ingredient.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../utils/hooks";
import {TIngredient, TStuffing} from "../../utils/types";


function Ingredient({element}: { element: TIngredient }) {

  const {
    bun,
    stuffing
  }: { bun: TIngredient | null; stuffing: TStuffing[] | null } = useAppSelector(state => state.burgerConstructor);
  const count = [bun ?? {_id: null}, ...stuffing ?? []].filter(item => item._id === element._id).length;
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
}

export default Ingredient;