import React, {useEffect, useMemo} from "react";
import styles from "./BurgerIngredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from "prop-types";
import {ingredientsPropType} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions";


function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one');

  const {ingredientsRequest, ingredientsFailed, ingredients} = useSelector(state => state.ingredients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients())
  }, [])

  const {bun: buns, sauce: sauces, main: mains} = useMemo(() => {
    const result = {
      "bun": [],
      "sauce": [],
      "main": []
    }
    ingredients && ingredients.forEach((el) => {
      result[el.type].push(<Ingredient info={el} key={el._id} name={el.name} price={el.price} image={el.image}
                                       id={el._id}/>)
    })
    return result
  }, [ingredients])


  return <section className={styles.container}>

    <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
    <div className="mt-5" style={{display: 'flex'}}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
    <section className={`${styles.scroll} mt-10`}>
      {ingredientsFailed
        ? (<p className="text text_type_main-small">Ошибка в получении данных</p>)
        : ingredientsRequest
          ? (<p className="text text_type_main-small">Загрузка...</p>)
          :
          (<ul className={styles.list}>
            <li>
              <h3 className="text text_type_main-medium">Булки</h3>
              <ul className={styles.ingredients}>
                {buns}
              </ul>
            </li>
            <li>
              <h3 className="text text_type_main-medium">Соусы</h3>
              <ul className={styles.ingredients}>
                {sauces}
              </ul>
            </li>
            <li>
              <h3 className="text text_type_main-medium">Начинки</h3>
              <ul className={styles.ingredients}>
                {mains}
              </ul>
            </li>
          </ul>)
      }
    </section>
  </section>


};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropType)
};

export default BurgerIngredients;





