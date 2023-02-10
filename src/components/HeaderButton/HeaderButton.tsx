import React from "react";
import styles from "./HeaderButton.module.css";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

interface ButtonProps {
    text: string;
    type: string;
    active: boolean;
}

const components: {[index: string]:any} = {
    burger: BurgerIcon,
    list: ListIcon,
    profile: ProfileIcon,
};
function HeaderButton(props: ButtonProps) {
    const SpecificIcon = components[props.type];

    return(
        <div className={`${styles.button} pl-5 pr-5 mt-4 mb-4`}>
            <SpecificIcon type={props.active ? "primary" : "secondary"} />
            <p className={`${!props.active && "text_color_inactive"} ml-2 text text_type_main-default`}>{props.text}</p>
        </div>
    )
}

export default HeaderButton;

