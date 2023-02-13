import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal");

function Modal({onClose, children}) {
    React.useEffect(() => {
        const handleEscape = (e) => {
            e.key === "Escape" && onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape)
    }, []);
    return ReactDOM.createPortal((
        <>
            <ModalOverlay onClose={onClose} />
            <div className={styles.popup}>
                <div className={styles.closeButton}>
                    <CloseIcon onClick={onClose} type="primary"/>
                </div>
                {children}
            </div>
        </>
    ), modalRoot)
};

Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.element,
}

export default Modal;