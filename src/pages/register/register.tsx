import React, {FormEventHandler} from 'react';
import styles from "./register.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "../../utils/hooks";
import {register} from "../../services/actions/Auth";

function Register() {
  const [value, handleChange] = useForm({"Name": '', "E-mail": "", "Password": ""});
  const [type, setType] = React.useState<'text' | 'email' | 'password'>('password');
  const navigate = useNavigate();
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    register(value["E-mail"], value.Password, value.Name).then(() => navigate('/login'))
      .catch(err => console.error(err))
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.header + " text text_type_main-medium"}>Регистрация</h1>
          <form className={styles.form} onSubmit={submitHandler}>
            <Input placeholder={'Имя'} value={value.Name} name={"Name"}
                   onChange={handleChange}>
            </Input>
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
