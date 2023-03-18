import React, {useEffect, useMemo, useRef} from "react";
import styles from "./BurgerIngredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../Ingredient/Ingredient";
import {useInView} from "react-intersection-observer";
import {useAppSelector} from "../../utils/hooks";
import {TIngredient} from "../../utils/types";


function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one');


  const {ingredientsRequest, ingredientsFailed, ingredients} = useAppSelector(state => state.ingredients);


  const {
    bun: buns,
    sauce: sauces,
    main: mains
  } = useMemo(() => {
    const result: { [key: string]: JSX.Element[] } = {
      "bun": [],
      "sauce": [],
      "main": []
    }
    ingredients && ingredients.forEach((el: TIngredient) => {
      result[el.type].push(<Ingredient element={el} key={el._id}/>)
    })
    return result
  }, [ingredients])

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function scrollToIndex(index: number) {
    const listNode = scrollContainerRef.current!;
    const partNode = listNode.querySelectorAll('li > h3')[index] as HTMLElement;
    listNode.scroll({top: partNode.offsetTop, behavior: "smooth"});
  }

  const [bunsRef, bunsInView,] = useInView({
    threshold: 0,
    initialInView: true,
    rootMargin: '-50px 0px 0px 0px',
    root: scrollContainerRef.current,
    trackVisibility: true,
    delay: 100,
  });

  const [saucesRef, saucesInView,] = useInView({
    threshold: 0,
    rootMargin: '-50px 0px 0px 0px',
    root: scrollContainerRef.current,
    trackVisibility: true,
    delay: 100,
  });

  const [mainsRef, mainsInView,] = useInView({
    threshold: 0,
    rootMargin: '-50px 0px 0px 0px',
    root: scrollContainerRef.current,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (bunsInView) {
      setCurrent('one')
    } else if (saucesInView) {
      setCurrent('two')
    } else {
      setCurrent('three')
    }
  }, [bunsInView, saucesInView, mainsInView])

  return <>
    <section className={styles.container}>

      <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
      <div className={`${styles.tabsContainer} mt-5`}>
        <Tab value="one" active={current === 'one'} onClick={() => scrollToIndex(0)}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'}
             onClick={() => scrollToIndex(1)}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={() => scrollToIndex(2)}>
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
              <li ref={bunsRef}>
                <h3 className="text text_type_main-medium">Булки</h3>
                <ul className={styles.ingredients}>
                  {buns}
                </ul>
              </li>
              <li ref={saucesRef}>
                <h3 className="text text_type_main-medium">Соусы</h3>
                <ul className={styles.ingredients}>
                  {sauces}
                </ul>
              </li>
              <li ref={mainsRef}>
                <h3 className="text text_type_main-medium">Начинки</h3>
                <ul className={styles.ingredients}>
                  {mains}
                </ul>
              </li>
            </ul>)
        }
      </section>
    </section>
  </>
}


export default BurgerIngredients;





