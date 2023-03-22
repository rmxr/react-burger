import React, {FormEventHandler} from 'react';
import styles from "./forgot-password.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {requestPasswordReset} from "../../services/actions/Auth";

function ForgotPassword() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState({"E-mail": ""});

  const submitForm: FormEventHandler = (e) => {
    e.preventDefault();
    requestPasswordReset(value["E-mail"]).then(() => {
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
          <form className={styles.form} onSubmit={submitForm}>
            <Input placeholder={'Укажите e-mail'} value={value["E-mail"]}
                   onChange={e => setValue({...value, "E-mail": e.target.value})}>
            </Input>
            <Button htmlType="submit" type="primary" size="medium">
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
