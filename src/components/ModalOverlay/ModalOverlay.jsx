import React from "react";
import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";

function ModalOverlay({onClose}) {
    return (
        <div onClick={onClose} className={styles.overlay}>

        </div>
    )
};

ModalOverlay.propTypes = {
    onClose: PropTypes.func,
}

export default ModalOverlay;