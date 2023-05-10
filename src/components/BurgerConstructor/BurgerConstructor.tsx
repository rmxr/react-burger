import React, {useCallback} from "react";
import styles from "./BurgerConstructor.module.css";
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorListItem from "../BurgerConstructorListItem/BurgerConstructorListItem";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {v4 as uuidv4} from 'uuid';
import LargeIcon from "../../images/largeIcon.svg";
import {useDrop} from "react-dnd";
import {ADD_INGREDIENT_TO_CONSTRUCTOR, REARRANGE_CONSTRUCTOR} from "../../services/actions/burgerConstructor";
import {postOrder} from "../../services/actions/orderDetails";
import {getCookie} from "../../utils/util";
import {useNavigate} from "react-router-dom";
import {useAppSelector, useAppDispatch} from "../../utils/hooks";
import {TIngredient, TStuffing} from "../../utils/types";


function BurgerConstructor() {
  const navigate = useNavigate();
  const {
    bun,
    stuffing
  }: { bun: TIngredient | null; stuffing: TStuffing[] | null } = useAppSelector(state => state.burgerConstructor);
  const {user} = useAppSelector(state => state.auth);
  const {orderRequest} = useAppSelector(state => state.order)
  const [modal, setModal] = React.useState(false);
  const openModal = () => {
    if (!orderRequest && user.email) {
      const authToken = getCookie('token');
      dispatch(postOrder([bun!._id, ...stuffing!.map(item => item._id)], authToken!))
    } else {
      navigate('/Login')
    }
    setModal(true)
  };
  const closeModal = () => setModal(false);
  const dispatch = useAppDispatch();


  // DnD Sorting
  const findCard = useCallback(
    (constructorIndex: string) => {
      const stuffingItem = stuffing!.filter((c) => `${c.constructorIndex}` === constructorIndex)[0];
      return {
        stuffingItem,
        index: stuffing!.indexOf(stuffingItem),
      }
    },
    [stuffing],
  )

  const moveCard = useCallback(
    (constructorIndex: string, atIndex: number) => {
      const {stuffingItem, index} = findCard(constructorIndex)
      dispatch({
        type: REARRANGE_CONSTRUCTOR,
        index: index,
        atIndex: atIndex,
        stuffingItem: stuffingItem,
      })
    },
    [findCard, stuffing],
  )
  const [, sortingDrop] = useDrop(() => ({accept: "sortingItem"}))
  // DnD Sorting.end


  const [{isHover}, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemID: TIngredient | TStuffing) {
      dispatch({
        type: ADD_INGREDIENT_TO_CONSTRUCTOR,
        item: itemID,
        constructorIndex: uuidv4(),
      })
    },
    collect: monitor => ({isHover: monitor.isOver(),})
  });
  const orderTotal = () => {
    return (bun ? bun.price * 2 : 0) + (stuffing ? stuffing.reduce((acc, curr) => acc + curr.price, 0) : 0)
  }


  return (
    <section className={`${styles.container} pt-25`}>
      <div ref={dropTarget} className={styles.listWithBuns}
           style={isHover ? {outline: "1px solid lightgreen", borderRadius: "20px"} : {}}>
        {stuffing === null && bun === null &&
          <p className={styles.emptyText + " text text_type_main-default"}>Перетащите сюда ингредиенты для создания
            бургера</p>}
        <div className={styles.bun}>
          {bun !== null && <ConstructorElement
            key={bun._id}
            type="top"
            isLocked={true}
            text={bun.name + " (верх)"}
            price={bun.price}
            thumbnail={bun.image}
          />}
        </div>
        <ul ref={sortingDrop} className={styles.stuffing}>
          {stuffing !== null && stuffing.map((item) => <BurgerConstructorListItem
            constructorIndex={item.constructorIndex}
            key={item.constructorIndex}
            text={item.name} price={item.price} moveCard={moveCard}
            findCard={findCard}
            thumbnail={item.image}/>)}
        </ul>
        <div className={styles.bun}>
          {bun !== null && <ConstructorElement
            key={bun._id}
            type="bottom"
            isLocked={true}
            text={bun.name + " (низ)"}
            price={bun.price}
            thumbnail={bun.image}
          />}
        </div>
      </div>
      <div className={`${styles.priceAndOrder} mt-10 mr-4`}>
        <div className={`${styles.price} mr-10`}>
          {(bun !== null || stuffing !== null) ? <p
              className="text text_type_digits-medium mr-2">{orderTotal()}</p> :
            <p
              className="text text_type_digits-medium mr-2">0</p>

          }
          <img alt="Космобаксы" src={LargeIcon}></img>
        </div>
        <Button disabled={bun === null} onClick={openModal} htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
        {modal && <Modal onClose={closeModal}>
          <OrderDetails/>
        </Modal>}
      </div>
    </section>
  )
}

export default BurgerConstructor;

