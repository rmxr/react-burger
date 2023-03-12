import React from 'react';
import styles from "./login.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../services/actions/Auth";


function Login() {
  const [value, setValue] = React.useState({"E-mail": "", "Password": ""});
  const [type, setType] = React.useState('password');
  const dispatch = useDispatch();


  const onSubmitClick = (e) => {
    e.preventDefault();
    dispatch(login(value["E-mail"], value.Password));
  };


  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.header + " text text_type_main-medium"}>Вход</h1>
          <form className={styles.form}>
            <Input placeholder={'E-mail'} value={value["E-mail"]}
                   onChange={e => setValue({...value, "E-mail": e.target.value})}>
            </Input>
            <Input placeholder={'Пароль'} value={value.Password} type={type} onIconClick={() => {
              setType(type === 'password' ? 'text' : 'password')
            }}
                   onChange={e => setValue({...value, "Password": e.target.value})}
                   icon={type === 'password' ? 'ShowIcon' : "HideIcon"}>
            </Input>
            <Button htmlType="submit" type="primary" size="medium" onClick={onSubmitClick}>
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
    </>
  );
}

export default Login;
