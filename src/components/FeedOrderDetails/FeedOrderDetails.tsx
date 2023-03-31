import React, {useEffect, useMemo, useState} from "react";
import styles from "./FeedOrderDetails.module.css";
import {useLocation, useParams} from "react-router-dom";
import {makeRequest} from "../../utils/util";
import {useAppSelector} from "../../utils/hooks";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import FeedOrderDetailsListItem from "../FeedOrderDetailsListItem/FeedOrderDetailsListItem";


export type TFeedOrder = {
  "_id": string;
  "ingredients": string[];
  "owner": string;
  "status": "done" | "pending";
  "name": string;
  "createdAt": string;
  "updatedAt": string;
  "number": number;
  "__v": 0
}

function FeedOrderDetails() {
  const [state, setState] = useState<TFeedOrder | null>(null);
  const ingredients = useAppSelector(state => state.ingredients.ingredients);
  const {id} = useParams();
  useEffect(() => {
    makeRequest(`orders/${id}`).then(res => setState(res.orders![0])).catch(err => console.error(err))
  }, []);

  const {burgerItems, price} = useMemo(() => {
    let burgerItems: { "img": string; "name": string; "price": number; "count": number }[] = [];
    let price: number = 0;
    if (state?.ingredients.length) {
      const countedIngredients: { [name: string]: number } = state.ingredients.reduce((allIngredients: { [name: string]: number }, ingr) => {
        const currCount = allIngredients[ingr] ?? 0;
        return {
          ...allIngredients,
          [ingr]: currCount + 1,
        };
      }, {});
      Object.keys(countedIngredients).forEach((i) => {
        const info = ingredients.find(item => item._id === i);
        const burgerItem = {
          "img": info!.image_mobile,
          "name": info!.name,
          "price": info!.price,
          "count": info!.type === "bun" ? countedIngredients[i] * 2 : countedIngredients[i],
        };
        burgerItems.push(burgerItem);
      })
      price = burgerItems.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.count, 0)
    }
    return {burgerItems, price};
  }, [state])

  const renderItems = useMemo(() => {
    const result: JSX.Element[] = [];
    burgerItems && ingredients.length && burgerItems.forEach((el, index) => {
      result.push(<FeedOrderDetailsListItem key={index} image={el.img} name={el.name} price={el.price}
                                            count={el.count}/>)
    })
    return result;
  }, [burgerItems])
  const location = useLocation();
  const numberStyle = location.state ? styles.modalNumber : styles.number

  return (
    <div className={styles.container}>
      <p className={`${numberStyle} text text_type_digits-default`}>{"#" + id}</p>
      <h1 className="text text_type_main-medium mt-10">{state?.name}</h1>
      <p
        className={`text text_type_main-small mt-3 ${state?.status === "done" ? styles.statusDone : ""}`}>{state?.status === "done" ? "Выполнен" : "В работе"}</p>
      <p className="text text_type_main-medium mt-15">Состав:</p>
      {ingredients.length && state && <div className={styles.composition}>
        {renderItems}
      </div>}
      {state && <div className={styles.dateAndPrice}>
        <FormattedDate className={"text text_type_main-default text_color_inactive"} date={new Date(state!.updatedAt)}/>
        <div className={styles.price}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>}

    </div>
  )
}

export default FeedOrderDetails;