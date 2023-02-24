import React, {useCallback} from "react";
import styles from "./BurgerConstructor.module.css";
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorListItem from "../BurgerConstructorListItem/BurgerConstructorListItem";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {v4 as uuidv4} from 'uuid';
import LargeIcon from "../../images/LargeIcon.svg";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {ADD_INGREDIENT_TO_CONSTRUCTOR, REARRANGE_CONSTRUCTOR} from "../../services/actions/BurgerConstructor";
import {postOrder} from "../../services/actions/OrderDetails";


function BurgerConstructor() {
  const {bun, stuffing} = useSelector(state => state.burgerConstructor);
  const {orderRequest, orderFailed, order} = useSelector(state => state.order)
  const [modal, setModal] = React.useState(false);
  const openModal = () => {
    if (!orderRequest) {
      dispatch(postOrder([bun._id, ...stuffing.map(item => item._id)]))
    }
    setModal(true)
  };
  const closeModal = () => setModal(false);
  const dispatch = useDispatch();


  // DnD Sorting
  const findCard = useCallback(
    (constructorIndex) => {
      const stuffingItem = stuffing.filter((c) => `${c.constructorIndex}` === constructorIndex)[0];
      return {
        stuffingItem,
        index: stuffing.indexOf(stuffingItem),
      }
    },
    [stuffing],
  )
  const moveCard = useCallback(
    (constructorIndex, atIndex, key) => {
      const {stuffingItem, index} = findCard(constructorIndex)
      dispatch({
        type: REARRANGE_CONSTRUCTOR,
        index: index,
        atIndex: atIndex,
        stuffingItem: stuffingItem,
        key: key,
      })
    },
    [findCard, stuffing],
  )
  const [, sortingDrop] = useDrop(() => ({accept: "sortingItem"}))
  // DnD Sorting.end


  const [{isHover}, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemID) {
      dispatch({
        type: ADD_INGREDIENT_TO_CONSTRUCTOR,
        item: itemID,
        constructorIndex: uuidv4(),
      })
    },
    collect: monitor => ({isHover: monitor.isOver(),})
  });
  const orderTotal = () => {
    if (bun.price) {
      return bun.price * 2 + stuffing.reduce((acc, curr) => acc + curr.price, 0)
    } else {
      return stuffing.reduce((acc, curr) => acc + curr.price, 0)
    }
  }


  return (
    <section className={`${styles.container} pt-25`}>
      <div ref={dropTarget} className={styles.listWithBuns}
           style={isHover ? {outline: "1px solid lightgreen", borderRadius: "20px"} : {}}>
        {stuffing.length === 0 && !bun.price &&
          <p className={styles.emptyText + " text text_type_main-default"}>Перетащите сюда ингредиенты для создания
            бургера</p>}
        <div className={styles.bun}>
          {bun.price && <ConstructorElement
            key={bun._id}
            type="top"
            isLocked={true}
            text={bun.name + " (верх)"}
            price={bun.price}
            thumbnail={bun.image}
          />}
        </div>
        <ul ref={sortingDrop} className={styles.stuffing}>
          {stuffing.map((item) => <BurgerConstructorListItem constructorIndex={item.constructorIndex}
                                                             key={item.constructorIndex}
                                                             text={item.name} price={item.price} moveCard={moveCard}
                                                             findCard={findCard}
                                                             thumbnail={item.image}/>)}
        </ul>
        <div className={styles.bun}>
          {bun.price && <ConstructorElement
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
          {(bun.price || stuffing.length !== 0) ? <p
              className="text text_type_digits-medium mr-2">{orderTotal()}</p> :
            <p
              className="text text_type_digits-medium mr-2">0</p>

          }
          <img alt="Космобаксы" src={LargeIcon}></img>
        </div>
        <Button disabled={!bun.price} onClick={openModal} htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
        {modal && <Modal onClose={closeModal}>
          <OrderDetails/>
        </Modal>}
      </div>
    </section>
  )
};

// BurgerConstructor.propTypes = {
//   props: PropTypes.arrayOf(ingredientsPropType)
// };

export default BurgerConstructor;

