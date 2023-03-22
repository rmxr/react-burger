import React, {FormEventHandler, useEffect} from 'react';
import styles from "./reset-password.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {resetPassword} from "../../services/actions/Auth";

function ResetPassword() {
  const [value, setValue] = React.useState({"Password": "", "Code": ""});
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
            <Input placeholder={'Введите новый пароль'} value={value.Password} type={type} onIconClick={() => {
              setType(type === 'password' ? 'text' : 'password')
            }}
                   onChange={e => setValue({...value, "Password": e.target.value})}
                   icon={type === 'password' ? 'ShowIcon' : "HideIcon"}>
            </Input>

            <Input placeholder={'Введите код из письма'} value={value.Code}
                   onChange={e => setValue({...value, "Code": e.target.value})}>
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
