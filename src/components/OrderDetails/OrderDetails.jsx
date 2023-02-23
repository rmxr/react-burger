import React from "react";
import styles from "./OrderDetails.module.css";
import donePic from "../../images/graphics.png";
import {useSelector} from "react-redux";

function OrderDetails() {
  const {order} = useSelector(state => state.order)

  return (
    <div className={styles.container}>
      <p
        className={styles.glow + " text text_type_digits-large mt-30"}>{order.number ? order.number : "Загрузка..."}</p>
      <p className="mt-8 text text_type_main-medium">идентификатор заказа</p>
      <img className="mt-15" alt="Заказ создан" src={donePic}/>
      <p className="mt-15 text text_type_main-small">Ваш заказ начали готовить</p>
      <p className="mt-2 mb-30 text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной
        станции</p>


    </div>
  )
};

export default OrderDetails;