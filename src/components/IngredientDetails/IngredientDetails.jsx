import React from "react";
import styles from "./IngredientDetails.module.css";

function IngredientDetails({info}) {
    return(
        <div className={styles.container}>
            {console.log(info)}
            <p className={styles.text + " text text_type_main-large mt-10 ml-10 mr-10"}>Детали ингредиента</p>
            <img src={info.image_large} />
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