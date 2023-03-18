import React from "react";
import styles from "./HeaderButton.module.css";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {TIconProps} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";

interface IHeaderButtonProps {
  text: string;
  type: string;
  href: string;
}

const components: { [key: string]: ({type}: TIconProps) => JSX.Element } = {
  burger: BurgerIcon,
  list: ListIcon,
  profile: ProfileIcon,
};


function HeaderButton({text, type, href}: IHeaderButtonProps) {
  const SpecificIcon = components[type];

  return (
    <NavLink to={href} className={`${styles.button} pl-5 pr-5 mt-4 mb-4`}>
      {({isActive}) => (
        <>
          <SpecificIcon type={isActive ? "primary" : "secondary"}/>
          <p className={`${!isActive && "text_color_inactive"} ml-2 text text_type_main-default`}>{text}</p>
        </>
      )}
    </NavLink>
  )
}

export default HeaderButton;

