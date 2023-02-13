import React from "react";
import styles from "./HeaderButton.module.css";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const components = {
    burger: BurgerIcon,
    list: ListIcon,
    profile: ProfileIcon,
};
function HeaderButton(props) {
    const SpecificIcon = components[props.type];

    return(
        <div className={`${styles.button} pl-5 pr-5 mt-4 mb-4`}>
            <SpecificIcon type={props.active ? "primary" : "secondary"} />
            <p className={`${!props.active && "text_color_inactive"} ml-2 text text_type_main-default`}>{props.text}</p>
        </div>
    )
};

HeaderButton.propTypes = {
    active: PropTypes.bool,
    text: PropTypes.string,
    type: PropTypes.string,
};

export default HeaderButton;

