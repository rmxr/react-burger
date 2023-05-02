import React, {FormEventHandler, useEffect} from 'react';
import styles from "./profile.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {accessUserData, LOGOUT} from "../../services/actions/auth";
import {getCookie, logout, updateToken} from "../../utils/util";
import {useAppSelector, useAppDispatch, useForm} from "../../utils/hooks";

function Profile() {
  const [value, handleChange, setValue] = useForm({"Name": '', "E-mail": "", "Password": ""});

  const [type, setType] = React.useState<'text' | 'email' | 'password'>('password');
  const dispatch = useAppDispatch();
  const authToken = getCookie('token');
  const {user} = useAppSelector(state => state.auth);
  const isChanged = (value.Name !== user.name) || (value["E-mail"] !== user.email);
  const location = useLocation();
  const orders = location.pathname !== "/profile";

  useEffect(() => {

      if (!authToken) {
        updateToken().then(() => {
          const newToken = getCookie('token');
          dispatch(accessUserData('GET', newToken!));
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


  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(accessUserData('PATCH', authToken!, {
      'name': value.Name,
      'email': value["E-mail"],
    }))
  };

  const onCancelClick = () => {
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
        <div className={orders ? styles.containerWithOrders : styles.container}>
          <div className={styles.navbar}>
            <NavLink
              to="/profile"
              style={({isActive}) => {
                return {
                  color: isActive ? "inherit" : "",
                  lineHeight: "64px",
                };
              }} end
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
          {!orders && <form className={styles.formContainer} onSubmit={submitHandler}>
            <Input placeholder={'Имя'} value={value.Name} icon={"EditIcon"} name={"Name"}
                   onChange={handleChange}>
            </Input>
            <Input placeholder={'Логин'} value={value["E-mail"]} icon={"EditIcon"} name={"E-mail"}
                   onChange={handleChange}>
            </Input>
            <Input placeholder={'Пароль'} value={value.Password} type={type} name={"Password"} onIconClick={() => {
              setType(type === 'password' ? 'text' : 'password')
            }}
                   onChange={handleChange}
                   icon={type === 'password' ? 'ShowIcon' : "HideIcon"}>
            </Input>
            {isChanged ? <>
              <div className={styles.buttonsBlock}>
                <Button extraClass={styles.cancel} htmlType="button" type="secondary" size="medium"
                        onClick={onCancelClick}>
                  Отмена
                </Button>
                <Button htmlType="submit" type="primary" size="medium">
                  Сохранить
                </Button>
              </div>
            </> : null}
          </form>}
          {orders && <Outlet/>}
        </div>
      </main>
    </>
  );
}

export default Profile;
