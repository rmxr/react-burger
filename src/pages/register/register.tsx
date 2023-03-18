import React, {FormEventHandler} from 'react';
import styles from "./register.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {makeRequest} from "../../utils/util";

function Register() {
  const [value, setValue] = React.useState({"Name": '', "E-mail": "", "Password": ""});
  const [type, setType] = React.useState<'text' | 'email' | 'password'>('password');
  const navigate = useNavigate();
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    makeRequest('auth/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "email": value["E-mail"],
        "password": value.Password,
        "name": value.Name
      })
    }).then(() => navigate('/login'))
      .catch(err => console.error(err))
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.header + " text text_type_main-medium"}>Регистрация</h1>
          <form className={styles.form} onSubmit={submitHandler}>
            <Input placeholder={'Имя'} value={value.Name}
                   onChange={e => setValue({...value, "Name": e.target.value})}>
            </Input>
            <Input placeholder={'E-mail'} value={value["E-mail"]}
                   onChange={e => setValue({...value, "E-mail": e.target.value})}>
            </Input>
            <Input placeholder={'Пароль'} value={value.Password} type={type} onIconClick={() => {
              setType(type === 'password' ? 'text' : 'password')
            }}
                   onChange={e => setValue({...value, "Password": e.target.value})}
                   icon={type === 'password' ? 'ShowIcon' : "HideIcon"}>
            </Input>
            <Button htmlType="submit" type="primary" size="medium">
              Зарегистрироваться
            </Button>
          </form>
          <p className={styles.alreadyRegistered + " text text_type_main-default text_color_inactive"}>Уже
            зарегистрированы?&nbsp;
            <Link
              to={{pathname: `/login`}}
            >Войти</Link>

          </p>
        </div>
      </main>
    </>
  );
}

export default Register;
