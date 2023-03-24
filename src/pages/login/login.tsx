import React, {FormEventHandler} from 'react';
import styles from "./login.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {login} from "../../services/actions/Auth";
import {useAppDispatch, useForm} from "../../utils/hooks";


function Login() {
  const [value, handleChange] = useForm({"E-mail": "", "Password": ""});
  const [type, setType] = React.useState<"password" | "text" | "email">('password');
  const dispatch = useAppDispatch();


  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(login(value["E-mail"], value.Password));
  };


  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.header + " text text_type_main-medium"}>Вход</h1>
        <form onSubmit={submitHandler} className={styles.form}>
          <Input placeholder={'E-mail'} value={value["E-mail"]} name={"E-mail"}
                 onChange={handleChange}>
          </Input>
          <Input placeholder={'Пароль'} value={value.Password} type={type} name={"Password"} onIconClick={() => {
            setType(type === 'password' ? 'text' : 'password')
          }}
                 onChange={handleChange}
                 icon={type === 'password' ? 'ShowIcon' : "HideIcon"}>
          </Input>
          <Button htmlType="submit" type="primary" size="medium">
            Войти
          </Button>
        </form>
        <p className={styles.alreadyRegistered + " mt-14 text text_type_main-default text_color_inactive"}>Вы — новый
          пользователь?&nbsp;
          <Link
            to={{pathname: `/register`}}
          >Зарегистрироваться</Link>

        </p>
        <p className={styles.alreadyRegistered + " mt-4 text text_type_main-default text_color_inactive"}>Забыли
          пароль?&nbsp;
          <Link
            to={{pathname: `/forgot-password`}}
          >Восстановить пароль</Link>
        </p>

      </div>
    </main>
  );
}

export default Login;
