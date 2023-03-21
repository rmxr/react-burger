import React from "react";
import styles from "./BurgerConstructorListItem.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {REMOVE_INGREDIENT_FROM_CONSTRUCTOR} from "../../services/actions/BurgerConstructor";
import {useDrag, useDrop} from "react-dnd";
import {TStuffing} from "../../utils/types";
import {useAppDispatch} from "../../utils/hooks";

function BurgerConstructorListItem({text, price, thumbnail, constructorIndex, moveCard, findCard}: {
  text: string;
  price: number;
  thumbnail: string;
  constructorIndex: string;
  moveCard: (constructorIndex: string, atIndex: number) => void;
  findCard: (constructorIndex: string) => { stuffingItem: TStuffing; index: number };
}) {
  const dispatch = useAppDispatch();
  const deleteHandler = () => {
    dispatch({
      type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
      constructorIndex: constructorIndex,
    })
  };

  // DnD Sorting start
  const originalIndex = findCard(constructorIndex).index;
  const [{isDragging}, drag] = useDrag(
    () => ({
      type: 'sortingItem',
      item: {constructorIndex, originalIndex},
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const {constructorIndex: droppedId, originalIndex} = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveCard(droppedId, originalIndex)
        }
      },
    }),
    [constructorIndex, originalIndex, moveCard],
  )
  const [, drop] = useDrop(
    () => ({
      accept: 'sortingItem',
      hover({constructorIndex: draggedId}: { constructorIndex: string }) {
        if (draggedId !== constructorIndex) {
          const {index: overIndex} = findCard(constructorIndex)
          moveCard(draggedId, overIndex)
        }
      },
    }),
    [findCard, moveCard],
  )
  const opacity = isDragging ? 0 : 1;
  // DnD Sorting end


  return (
    <li ref={(node) => drag(drop(node))} style={{opacity}} className={styles.item}>
      <DragIcon type="primary"/>
      <ConstructorElement
        handleClose={deleteHandler}
        text={text}
        price={price}
        thumbnail={thumbnail}
      />
    </li>
  )
}

export default BurgerConstructorListItem;