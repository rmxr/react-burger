import React, {FormEventHandler} from 'react';
import styles from "./Login.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {login} from "../../services/actions/auth";
import {useAppDispatch, useForm} from "../../utils/hooks";


function Login() {
  const [value, handleChange] = useForm({"email": "", "password": ""});
  const [passwordInputType, setPasswordInputType] = React.useState<"password" | "text">('password');
  const [submitError, setSubmitError] = React.useState(false);
  const [isFormValid, setFormValidity] = React.useState(false)
  const dispatch = useAppDispatch();
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const keyframes = [
    {transform: "translateX(0)"},
    {transform: "translateX(5px)"},
    {transform: "translateX(-5px)"},
    {transform: "translateX(5px)"},
    {transform: "translateX(0)"},
  ];


  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(value.email, value.password))
    } catch (error) {
      formRef.current?.animate(keyframes, {
        duration: 150,
        iterations: 3,
      });
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false)
      }, 2500)
    }
  };

  const inputHandler: FormEventHandler = () => {
    if (formRef.current) {
      setFormValidity(formRef.current.checkValidity())
    }
  }

  const isPassword = passwordInputType === 'password';

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.header + " text text_type_main-medium"}>Вход</h1>
        <form ref={formRef} onInput={inputHandler} onSubmit={submitHandler}
              className={styles.form}>
          <Input placeholder={'E-mail'} value={value.email} name={"email"}
                 onChange={handleChange} required type='email' error={submitError}
                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$">
          </Input>
          <Input placeholder={'Пароль'} required value={value.password} type={passwordInputType} name={"password"}
                 onIconClick={() => {
                   setPasswordInputType(isPassword ? 'text' : 'password')
                 }}
                 onChange={handleChange} errorText="Неправильный пароль или e-mail" error={submitError}
                 icon={isPassword ? 'ShowIcon' : "HideIcon"}>
          </Input>
          <div className={styles.tooltipContainer}><Button disabled={!isFormValid} htmlType="submit" type="primary"
                                                           size="medium">
            Войти
            {!isFormValid && <span className={styles.tooltipText}>Введите e-mail и пароль</span>}
          </Button></div>
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
