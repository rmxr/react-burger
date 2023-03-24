import React from "react";
import styles from "./OrdersList.module.css";

function OrdersList({feed}: { feed: JSX.Element[] }) {

  return (
    <section className={styles.container}>
      {feed}
    </section>
  )
}

export default OrdersList;