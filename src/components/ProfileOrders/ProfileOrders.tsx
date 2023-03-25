import React, {useEffect, useMemo} from "react";
import styles from "./ProfileOrders.module.css";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {ORDERS_CONNECTION_START, WS_CONNECTION_END} from "../../utils/wsActionTypes";
import {getCookie} from "../../utils/util";
import {TOrder} from "../../services/reducers/feedReducer";
import OrdersListItem from "../OrdersListItem/OrdersListItem";
import OrdersList from "../OrdersList/OrdersList";


function ProfileOrders() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const accessToken = getCookie("token");
    dispatch({type: ORDERS_CONNECTION_START, payload: `wss://norma.nomoreparties.space/orders?token=${accessToken}`})
    return () => {
      dispatch({type: WS_CONNECTION_END})
    }
  }, [])
  const {orders} = useAppSelector(state => state.profileOrders);
  const feed = useMemo(() => {
    const result: JSX.Element[] = [];
    orders && orders.forEach((el: TOrder) => {
      result.push(<OrdersListItem order={el} key={el._id}/>)
    })
    return result.reverse();
  }, [orders]);
  return (
    <div className={styles.ordersContainer}><OrdersList feed={feed}/></div>
  )
}

export default ProfileOrders;