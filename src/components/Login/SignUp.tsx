import React, {useCallback} from "react";
import {withRouter} from "react-router";
import app from "./base";
import classes from './Login.module.css'

interface ISignUpProp {
    history: any,
}

const SignUp: React.FC<ISignUpProp> = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/account");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className={classes.field_reg}>
            <h1>Регистрация</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    <input name="email" type="email" placeholder="Логин"/>
                </label>
                <label>
                    <input name="password" type="password" placeholder="Пароль"/>
                </label>
                <button type="submit">Готово</button>
            </form>
        </div>
    );
};

export default withRouter(SignUp);
