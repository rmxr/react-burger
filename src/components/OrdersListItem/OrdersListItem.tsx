import React, {useMemo} from "react";
import styles from "./OrdersListItem.module.css";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import PreviewCircle from "../PreviewCircle/PreviewCircle";
import {TOrder} from "../../services/reducers/feedReducer";
import {useAppSelector} from "../../utils/hooks";
import {v4 as uuidv4} from 'uuid';
import {useLocation, useNavigate} from "react-router-dom";

function OrdersListItem({order}: { order: TOrder }) {
  const ingredients = useAppSelector(state => state.ingredients.ingredients);
  const price = useMemo(() => {
    let result: number = 0;
    if (ingredients.length && order) {
      order.ingredients.forEach((orderIngredient) => {
        const relevantIngredient = ingredients.find(item => item._id === orderIngredient)!;
        const ingredientsPrice = relevantIngredient.type === "bun" ? relevantIngredient.price * 2 : relevantIngredient.price;
        result = result + ingredientsPrice;
      })
    }
    return result;
  }, [order.ingredients, order]);

  const previews = useMemo(() => {
    const result: JSX.Element[] = [];
    order && ingredients.length && order.ingredients.forEach((el) => {
      if (result.length === 6) {
        return
      }
      const excess = order.ingredients.length - 6;
      const {image_mobile: image, name: alt} = ingredients.find(item => item._id === el)!;
      result.push((result.length === 5 && excess > 0) ?
        <PreviewCircle image={image} alt={alt} key={uuidv4()} excess={excess}/> :
        <PreviewCircle image={image} alt={alt} key={uuidv4()} excess={null}/>)
    });
    return result.reverse();
  }, [order]);

  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className={styles.container}
         onClick={() => navigate(`${location.pathname}/${order.number}`, {state: {background: location}})}>
      <div className={styles.idAndTimestamp}>
        <p className={"text text_type_digits-default"}>{`#${order.number}`}</p>
        <FormattedDate className={"text text_type_main-default text_color_inactive"}
                       date={new Date(order.updatedAt)}/>
      </div>
      <p className={`${styles.burgerName} text text_type_main-medium`}>{order.name}</p>
      <div className={styles.previewsAndPrice}>
        <div className={styles.previews}>
          {previews}
        </div>
        <div className={styles.price}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
    </div>
  )
};

export default OrdersListItem;