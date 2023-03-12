import React, {useEffect, useRef} from 'react';
import styles from "./forgot-password.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {makeRequest} from "../../utils/constants";
import {Link, Navigate} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState({"E-mail": ""});
  const formRef = useRef();

  useEffect(() => {
    formRef.current.addEventListener('submit', submitForm)
  }, []);
  const submitForm = (e) => {
    e.preventDefault();
    makeRequest("password-reset", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "email": value["E-mail"]
      })
    }).then(res => {
      navigate('/reset-password', {state: "Allow"})
    })
      .catch((err => {
        console.error(err);
      }))
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.header + " text text_type_main-medium"}>Восстановление пароля</h1>
          <form className={styles.form} ref={formRef}>
            <Input placeholder={'Укажите e-mail'} value={value["E-mail"]}
                   onChange={e => setValue({...value, "E-mail": e.target.value})}>
            </Input>
            <Button htmlType="button" type="primary" size="medium" onClick={submitForm}>
              Восстановить
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
  );
}

export default ForgotPassword;
