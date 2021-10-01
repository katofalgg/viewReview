import React, {useCallback, useContext} from "react";
import {withRouter, Redirect} from "react-router";
import app from './base'
import {AuthContext, AuthContextType} from './Auth';
import classes from './Login.module.css';

interface ISignINProp {
    history: any,
}

const LoginPage: React.FC<ISignINProp> = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/account");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );
    const {currentUser}: AuthContextType = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/account"/>;
    }
    return (
        <div className={classes.field_reg}>
            <h1>Вход в личный кабинет</h1>
            <form onSubmit={handleLogin}>
                <label>
                    <input name="email" type="email" placeholder="Логин"/>
                </label>
                <label>
                    <input name="password" type="password" placeholder="Пароль"/>
                </label>
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}
export default withRouter(LoginPage);
