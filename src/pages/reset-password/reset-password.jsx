import React, {useEffect, useRef} from 'react';
import styles from "./reset-password.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {makeRequest} from "../../utils/constants";

function ResetPassword() {
  const [value, setValue] = React.useState({"Password": "", "Code": ""});
  const [type, setType] = React.useState('password');
  const navigate = useNavigate();
  const formRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.state === "Allow") {
      formRef.current.addEventListener('submit', onSubmitClick)
    } else {
      navigate("/")
    }
  }, [location.state]);
  const onSubmitClick = (e) => {
    e.preventDefault();
    makeRequest('password-reset/reset', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "password": value.Password,
        "token": value.Code,
      })
    }).then(res => console.log(res))
      .catch(err => console.error(err))
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.header + " text text_type_main-medium"}>Восстановление пароля</h1>
          <form className={styles.form} ref={formRef}>
            <Input placeholder={'Введите новый пароль'} value={value.Password} type={type} onIconClick={() => {
              setType(type === 'password' ? 'text' : 'password')
            }}
                   onChange={e => setValue({...value, "Password": e.target.value})}
                   icon={type === 'password' ? 'ShowIcon' : "HideIcon"}>
            </Input>

            <Input placeholder={'Введите код из письма'} value={value.Code}
                   onChange={e => setValue({...value, "Code": e.target.value})}>
            </Input>
            <Button htmlType="submit" type="primary" size="medium" onClick={onSubmitClick}>
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
