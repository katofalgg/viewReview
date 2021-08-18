import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

const SignUp = ({ history }) => {
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
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Логин
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Пароль
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);