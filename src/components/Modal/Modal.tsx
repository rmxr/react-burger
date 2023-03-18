import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot = document.getElementById("modal") as HTMLElement;

function Modal({onClose, children}: { onClose: () => void; children: JSX.Element }) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      e.key === "Escape" && onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape)
  }, []);
  return ReactDOM.createPortal((
    <>
      <ModalOverlay onClose={onClose}/>
      <div className={styles.popup}>
        <div className={styles.closeButton}>
          <CloseIcon onClick={onClose} type="primary"/>
        </div>
        {children}
      </div>
    </>
  ), modalRoot)
}

export default Modal;