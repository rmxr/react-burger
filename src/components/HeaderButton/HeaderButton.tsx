import React from "react";
import styles from "./HeaderButton.module.css";

interface ButtonProps {
    text: string;
    children?: React.ReactNode;
}
function HeaderButton(props: ButtonProps) {
    return(
        <div className={`${styles.button} pl-5 pr-5 mt-4 mb-4`}>
            {props.children}
            <p className="ml-2 text text_type_main-default">{props.text}</p>
        </div>
    )
}

export default HeaderButton;

