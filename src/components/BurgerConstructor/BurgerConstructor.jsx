import React from "react";
import styles from "./BurgerConstructor.module.css";
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorListItem from "../BurgerConstructorListItem/BurgerConstructorListItem";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import {v4 as uuidv4} from 'uuid';
import LargeIcon from "../../images/LargeIcon.svg";
import {ingredientsPropType} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {ADD_INGREDIENT_TO_CONSTRUCTOR} from "../../services/actions/BurgerConstructor";


function BurgerConstructor({props}) {
  const [modal, setModal] = React.useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const {bun, stuffing} = useSelector(state => state.burgerConstructor);
  const dispatch = useDispatch();

  const [{isHover}, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemID) {
      dispatch({
        type: ADD_INGREDIENT_TO_CONSTRUCTOR,
        item: itemID,
      })
    },
    collect: monitor => ({isHover: monitor.isOver(),})
  });

  return (
    <section className={`${styles.container} pt-25`}>
      <div ref={dropTarget} className={styles.listWithBuns}
           style={isHover ? {outline: "1px solid lightgreen", borderRadius: "20px"} : {}}>
        <div className={styles.bun}>
          <ConstructorElement
            key={bun._id}
            type="top"
            isLocked={true}
            text={bun.name + " (верх)"}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={styles.stuffing}>
          {stuffing.map((item) => <BurgerConstructorListItem constructorIndex={item.constructorIndex} key={uuidv4()}
                                                             text={item.name} price={item.price}
                                                             thumbnail={item.image}/>)}
        </ul>
        <div className={styles.bun}>
          <ConstructorElement
            key={bun._id}
            type="bottom"
            isLocked={true}
            text={bun.name + " (низ)"}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={`${styles.priceAndOrder} mt-10 mr-4`}>
        <div className={`${styles.price} mr-10`}>
          <p
            className="text text_type_digits-medium mr-2">{bun.price * 2 + stuffing.reduce((acc, curr) => acc + curr.price, 0)}</p>
          <img alt="Космобаксы" src={LargeIcon}></img>
        </div>
        <Button onClick={openModal} htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
        {modal && <Modal onClose={closeModal}>
          <OrderDetails/>
        </Modal>}
      </div>
    </section>
  )
};

BurgerConstructor.propTypes = {
  props: PropTypes.arrayOf(ingredientsPropType)
};

export default BurgerConstructor;

