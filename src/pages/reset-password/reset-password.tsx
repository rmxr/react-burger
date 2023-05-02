import React, {FormEventHandler, useEffect} from 'react';
import styles from "./reset-password.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {resetPassword} from "../../services/actions/auth";
import {useForm} from "../../utils/hooks";

function ResetPassword() {
  const [value, handleChange] = useForm({"Password": "", "Code": ""});
  const [type, setType] = React.useState<'text' | 'email' | 'password'>('password');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state !== "Allow") {
      navigate("/")
    }
  }, [location.state]);
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    resetPassword(value.Password, value.Code)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.header + " text text_type_main-medium"}>Восстановление пароля</h1>
          <form className={styles.form} onSubmit={submitHandler}>
            <Input placeholder={'Введите новый пароль'} value={value.Password} name={"Password"} type={type}
                   onIconClick={() => {
                     setType(type === 'password' ? 'text' : 'password')
                   }}
                   onChange={handleChange}
                   icon={type === 'password' ? 'ShowIcon' : "HideIcon"}>
            </Input>

            <Input placeholder={'Введите код из письма'} value={value.Code} name={"Code"}
                   onChange={handleChange}>
            </Input>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </form>
          <p className={styles.alreadyRegistered + " text text_type_main-default text_color_inactive"}>Вспомнили
            пароль?&nbsp;
            <Link
              to={{pathname: `/login`}}
            >Войти</Link>
          </p>
        </div>
      </main>
    </>
  )
}

export default ResetPassword;
