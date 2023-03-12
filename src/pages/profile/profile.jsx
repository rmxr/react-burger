import React, {useEffect} from 'react';
import styles from "./profile.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {accessUserData, LOGOUT} from "../../services/actions/Auth";
import {useDispatch, useSelector} from "react-redux";
import {getCookie, logout, updateToken} from "../../utils/constants";

function Profile() {
  const [value, setValue] = React.useState({"Name": '', "E-mail": "", "Password": ""});
  const [type, setType] = React.useState('password');
  const dispatch = useDispatch();
  const authToken = getCookie('token');
  const {user} = useSelector(state => state.auth);
  const isChanged = (value.Name !== user.name) || (value["E-mail"] !== user.email);

  useEffect(() => {

      if (!authToken) {
        updateToken().then(() => {
          const newToken = getCookie('token');
          dispatch(accessUserData('GET', newToken));
          if (user.email.length !== 0) {
            setValue(
              {
                ...value,
                "Name": user.name,
                "E-mail": user.email,
              })
          }
        });
      } else {
        dispatch(accessUserData('GET', authToken));
        if (user.email.length !== 0) {
          setValue(
            {
              ...value,
              "Name": user.name,
              "E-mail": user.email,
            })
        }
      }

    }
    , [user.email]);


  const onSubmitClick = (e) => {
    e.preventDefault();
    dispatch(accessUserData('PATCH', authToken, {
      'name': value.Name,
      'email': value["E-mail"],
    }))
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    setValue(
      {
        ...value,
        "Name": user.name,
        "E-mail": user.email,
      })
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <NavLink
              to="/profile"
              style={({isActive}) => {
                return {
                  color: isActive ? "inherit" : "",
                  lineHeight: "64px",
                };
              }}
            >
              {({isActive, isPending}) => (
                <span
                  className={isActive ? "text text_type_main-medium" : "text text_type_main-medium text_color_inactive"}>Профиль</span>
              )}
            </NavLink>
            <NavLink
              to="/profile/orders"
              style={({isActive}) => {
                return {
                  color: isActive ? "inherit" : "",
                  lineHeight: "64px",
                };
              }}
            >
              {({isActive, isPending}) => (
                <span
                  className={isActive ? "text text_type_main-medium" : "text text_type_main-medium text_color_inactive"}>История заказов</span>
              )}
            </NavLink>
            <NavLink
              onClick={() => {
                logout();
                dispatch({
                  type: LOGOUT
                })
              }}
              to="/"
              style={({isActive}) => {
                return {
                  color: isActive ? "inherit" : "",
                  lineHeight: "64px",
                };
              }}
            >
              {({isActive, isPending}) => (
                <span
                  className={isActive ? "text text_type_main-medium" : "text text_type_main-medium text_color_inactive"}>Выход</span>
              )}
            </NavLink>
            <span className={`${styles.transparent} text text_type_main-small mt-20`}>В этом разделе вы можете
изменить свои персональные данные</span>
          </div>
          <form className={styles.formContainer}>
            <Input placeholder={'Имя'} value={value.Name} icon={"EditIcon"}
                   onChange={e => setValue({...value, "Name": e.target.value})}>
            </Input>
            <Input placeholder={'Логин'} value={value["E-mail"]} icon={"EditIcon"}
                   onChange={e => setValue({...value, "E-mail": e.target.value})}>
            </Input>
            <Input placeholder={'Пароль'} value={value.Password} type={type} onIconClick={() => {
              setType(type === 'password' ? 'text' : 'password')
            }}
                   onChange={e => setValue({...value, "Password": e.target.value})}
                   icon={type === 'password' ? 'ShowIcon' : "HideIcon"}>
            </Input>
            {isChanged ? <>
              <div className={styles.buttonsBlock}>
                <Button extraClass={styles.cancel} htmlType="button" type="secondary" size="medium"
                        onClick={onCancelClick}>
                  Отмена
                </Button>
                <Button htmlType="submit" type="primary" size="medium" onClick={onSubmitClick}>
                  Сохранить
                </Button>
              </div>
            </> : null}
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
