import React from "react";
import styles from "./FeedOrderDetailsListItem.module.css"
import PreviewCircle from "../PreviewCircle/PreviewCircle";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function FeedOrderDetailsListItem({
                                    image,
                                    name,
                                    price,
                                    count
                                  }: { image: string; name: string; price: number; count: number }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageAndName}><PreviewCircle image={image} alt={name} excess={null}/>
        <p className={styles.name + " text text_type_main-default"}>{name}</p></div>
      <div className={styles.countAndPrice}>
        <p className="text text_type_digits-default">{count + " x " + price}</p>
        <CurrencyIcon type={"primary"}/>
      </div>
    </div>
  )
}

export default FeedOrderDetailsListItem;