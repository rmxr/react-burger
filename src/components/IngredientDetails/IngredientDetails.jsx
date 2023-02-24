import React from "react";
import styles from "./IngredientDetails.module.css";
import {ingredientsPropType} from "../../utils/constants";
import {useSelector} from "react-redux";

function IngredientDetails() {
  const info = useSelector(state => state.ingredientDetails)
  return (
    <div className={styles.container}>
      <p className={styles.text + " text text_type_main-large mt-10 ml-10 mr-10"}>Детали ингредиента</p>
      <img src={info.image_large} alt={info.name}/>
      <p className={styles.name + " text text_type_main-medium mt-4"}>{info.name}</p>
      <div className={styles.infoBlock}>
        <div>
          <p className="text text_type_main-small text_color_inactive">Калории,ккал</p>
          <p className={`${styles.digits} text text_type_digits-default text_color_inactive`}>{info.calories}</p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">Белки, г</p>
          <p className={`${styles.digits} text text_type_digits-default text_color_inactive`}>{info.proteins}</p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
          <p className={`${styles.digits} text text_type_digits-default text_color_inactive`}>{info.fat}</p>
        </div>
        <div>
          <p className="text text_type_main-small text_color_inactive">Углеводы, г</p>
          <p className={`${styles.digits} text text_type_digits-default text_color_inactive`}>{info.carbohydrates}</p>
        </div>


      </div>
    </div>
  )
};

export default IngredientDetails;