import React, {FormEventHandler, useRef} from 'react';
import styles from "./Login.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {login} from "../../services/actions/auth";
import {useAppDispatch, useForm} from "../../utils/hooks";


function Login() {
  const [value, handleChange] = useForm({"E-mail": "", "Password": ""});
  const [type, setType] = React.useState<"password" | "text" | "email">('password');
  const [error, setError] = React.useState(false);
  const [isFormValid, setFormValidity] = React.useState<boolean | undefined>(false)
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);

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
      await dispatch(login(value["E-mail"], value.Password))
    } catch (error) {
      formRef.current?.animate(keyframes, {
        duration: 150,
        iterations: 3,
      });
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 2500)
    }
  };

  const inputHandler: FormEventHandler = () => setFormValidity(formRef.current?.checkValidity())

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.header + " text text_type_main-medium"}>Вход</h1>
        <form ref={formRef} onInput={inputHandler} onSubmit={submitHandler}
              className={styles.form}>
          <Input placeholder={'E-mail'} value={value["E-mail"]} name={"E-mail"}
                 onChange={handleChange} required type='email' error={error}
                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$">
          </Input>
          <Input placeholder={'Пароль'} required value={value.Password} type={type} name={"Password"}
                 onIconClick={() => {
                   setType(type === 'password' ? 'text' : 'password')
                 }}
                 onChange={handleChange} errorText="Неправильный пароль или e-mail" error={error}
                 icon={type === 'password' ? 'ShowIcon' : "HideIcon"}>
          </Input>
          <Button disabled={!isFormValid} htmlType="submit" type="primary" size="medium">
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
