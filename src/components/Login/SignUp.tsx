import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

interface ISignUpProp {
  history: any,
}

const SignUp: React.FC<ISignUpProp> = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <>
      <h1>Регистрация</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Логин
          <input name="email" type="email" placeholder="Логин" />
        </label>
        <label>
          Пароль
          <input name="password" type="password" placeholder="Пароль" />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
};

export default withRouter(SignUp);