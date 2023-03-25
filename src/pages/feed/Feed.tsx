import React, {useEffect, useMemo} from 'react';
import styles from './Feed.module.css';
import OrdersList from "../../components/OrdersList/OrdersList";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {FEED_CONNECTION_START, WS_CONNECTION_END} from "../../utils/wsActionTypes";
import {TOrder} from "../../services/reducers/feedReducer";
import OrdersListItem from "../../components/OrdersListItem/OrdersListItem";

function Feed() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({type: FEED_CONNECTION_START, payload: "wss://norma.nomoreparties.space/orders/all"})
    return () => {
      dispatch({type: WS_CONNECTION_END})
    }
  }, [])
  const {total, totalToday} = useAppSelector(state => state.feed);
  const {orders} = useAppSelector(state => state.feed);
  const feed = useMemo(() => {
    const result: JSX.Element[] = [];
    orders && orders.forEach((el: TOrder) => {
      result.push(<OrdersListItem order={el} key={el._id}/>)
    })
    return result
  }, [orders]);
  const {readyOrders, pendingOrders} = useMemo(() => {
    const result: { [key: string]: JSX.Element[] } = {
      "readyOrders": [],
      "pendingOrders": []
    };
    orders && orders.forEach((el: TOrder) => {
      if (el.status === "done") {
        if (result.readyOrders.length === 20) {
          return
        }
        result.readyOrders.push(<p key={el.number}
                                   className={"text text_type_digits-default " + styles.readyNumber}>{el.number}</p>)
      } else if (el.status === "pending") {
        if (result.pendingOrders.length === 20) {
          return
        }
        result.pendingOrders.push(<p key={el.number}
                                     className={"text text_type_digits-default " + styles.pendingNumber}>{el.number}</p>)
      }
    })
    return result;
  }, [orders])

  return (
    <>
      <h1 className={`${styles.header} text text_type_main-large`}>Лента заказов</h1>
      <main className={styles.main}>
        <OrdersList feed={feed}/>
        <section className={styles.stats}>
          <div className={styles.readyAndPending}>
            <div className={styles.readyAndPendingItem}>
              <h2 className={"text text_type_main-medium"}>Готовы:</h2>
              <div className={styles.numbersGrid}>
                {readyOrders}
              </div>
            </div>
            <div className={styles.readyAndPendingItem}>
              <h2 className={"text text_type_main-medium"}>В работе:</h2>
              <div className={styles.numbersGrid}>
                {pendingOrders}
              </div>
            </div>
          </div>
          <div>
            <h2 className={"text text_type_main-medium"}>Выполнено за все время:</h2>
            <p className={styles.glow + " text text_type_digits-large"}>{total}</p>
          </div>
          <div>
            <h2 className={"text text_type_main-medium"}>Выполнено за сегодня:</h2>
            <p className={styles.glow + " text text_type_digits-large"}>{totalToday}</p>
          </div>
        </section>
      </main>
    </>

  )
}

export default Feed;