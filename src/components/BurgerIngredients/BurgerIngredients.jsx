import React, {useEffect, useMemo, useRef} from "react";
import styles from "./BurgerIngredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from "prop-types";
import {ingredientsPropType} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/BurgerIngredients";
import {useInView} from "react-intersection-observer";


function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one');
  const [saucesPreviousY, setSaucesPreviousY] = React.useState(0);
  const [mainsPreviousY, setMainsPreviousY] = React.useState(0);

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
      result[el.type].push(<Ingredient element={el} key={el._id}/>)
    })
    return result
  }, [ingredients])

  const scrollContainerRef = useRef();

  const [saucesRef, inView, entry] = useInView({
    threshold: 0,
    root: scrollContainerRef.current,
    onChange: () => {
      if (entry && entry.target.getBoundingClientRect().top - scrollContainerRef.current.getBoundingClientRect().top < 30) {
        const currentY = entry.boundingClientRect.y;
        if (currentY > saucesPreviousY) {
          setCurrent('two')
        } else {
          setCurrent('one')
        }
        setSaucesPreviousY(currentY);
      }
    }
  });

  const [mainsRef, mainsInView, mainsEntry] = useInView({
    threshold: 0,
    root: scrollContainerRef.current,
    onChange: () => {
      if (entry && mainsEntry.target.getBoundingClientRect().top - scrollContainerRef.current.getBoundingClientRect().top < 30) {
        const currentY = mainsEntry.boundingClientRect.y;
        if (currentY > mainsPreviousY) {
          setCurrent('three')
        } else {
          setCurrent('two')
        }
        setMainsPreviousY(currentY);
      }
    }
  });


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
    <section ref={scrollContainerRef} className={`${styles.scroll} mt-10`}>
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
              <h3 ref={saucesRef} className="text text_type_main-medium">Соусы</h3>
              <ul className={styles.ingredients}>
                {sauces}
              </ul>
            </li>
            <li>
              <h3 ref={mainsRef} className="text text_type_main-medium">Начинки</h3>
              <ul className={styles.ingredients}>
                {mains}
              </ul>
            </li>
          </ul>)
      }
    </section>
  </section>


};

// BurgerIngredients.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientsPropType)
// };

export default BurgerIngredients;





