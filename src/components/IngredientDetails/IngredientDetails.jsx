import React, {useMemo} from "react";
import styles from "./IngredientDetails.module.css";
import {useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

function IngredientDetails() {
  const location = useLocation();
  const {ingredients: info} = useSelector(state => state.ingredients);
  const {id} = useParams();
  const textStyle = location.state ? styles.text : styles.centeredText;
  const ingredient = useMemo(() => {
    return info.find(item => item._id === id);
  }, [info]);
  if (ingredient) {
    return (
      <div className={styles.container}>
        <p
          className={textStyle + " text text_type_main-large mt-10 ml-10 mr-10"}>Детали
          ингредиента</p>
        <img className={styles.image} src={ingredient.image_large} alt={ingredient.name}/>
        <p className={styles.name + " text text_type_main-medium mt-4"}>{ingredient.name}</p>
        <div className={styles.infoBlock}>
          <div>
            <p className="text text_type_main-small text_color_inactive">Калории,ккал</p>
            <p
              className={`${styles.digits} text text_type_digits-default text_color_inactive`}>{ingredient.calories}</p>
          </div>
          <div>
            <p className="text text_type_main-small text_color_inactive">Белки, г</p>
            <p
              className={`${styles.digits} text text_type_digits-default text_color_inactive`}>{ingredient.proteins}</p>
          </div>
          <div>
            <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
            <p className={`${styles.digits} text text_type_digits-default text_color_inactive`}>{ingredient.fat}</p>
          </div>
          <div>
            <p className="text text_type_main-small text_color_inactive">Углеводы, г</p>
            <p
              className={`${styles.digits} text text_type_digits-default text_color_inactive`}>{ingredient.carbohydrates}</p>
          </div>


        </div>
      </div>
    )
  }
};

export default IngredientDetails;