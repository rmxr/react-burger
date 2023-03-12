import React from "react";
import styles from "./HeaderButton.module.css";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const components = {
  burger: BurgerIcon,
  list: ListIcon,
  profile: ProfileIcon,
};

function HeaderButton(props) {
  const SpecificIcon = components[props.type];

  return (
    <NavLink to={props.href} className={`${styles.button} pl-5 pr-5 mt-4 mb-4`}>
      {({isActive}) => (
        <>
          <SpecificIcon type={isActive ? "primary" : "secondary"}/>
          <p className={`${!isActive && "text_color_inactive"} ml-2 text text_type_main-default`}>{props.text}</p>
        </>
      )}
    </NavLink>
  )
};

HeaderButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
};

export default HeaderButton;

