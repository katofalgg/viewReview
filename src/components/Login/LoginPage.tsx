import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

interface ISignINProp {
  history: any,
}

const LoginPage: React.FC<ISignINProp>= ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");    
            } catch (error) {
                alert(error);
            }
        }, 
        [history]
    );
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/" />;
    }
    return(
        <>
        <h1>Вход в личный кабинет</h1>
        <form onSubmit={handleLogin}>
          <label>
            Логин
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Пароль
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Войти</button>
        </form>
      </>
    )
}
export default withRouter(LoginPage);