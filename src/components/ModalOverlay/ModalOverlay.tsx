import React from "react";
import styles from "./ModalOverlay.module.css";

function ModalOverlay({onClose}: { onClose: () => void }) {
  return (
    <div data-testid="overlay" onClick={onClose} className={styles.overlay}>

    </div>
  )
}

export default ModalOverlay;