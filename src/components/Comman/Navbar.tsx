import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Comman.module.css'

const Navbar: React.FC = () => {
    const links = [
        {path: "/main", name: 'Главная'},
        {path: "/content_list", name: 'ТОП-250'},
        {path: "/genres", name: 'Жанры'},
        {path: "/review", name: 'Рецензии'},
        {path: "/login", name: `Аккаунт`},
        {path: "/signup", name: 'Регистрация'},
    ]

    return (
        <div className={classes.navbar}>
            {links.map(link => (
                <div key={link.name}>
                    <NavLink to={link.path} className={classes.navlink}>{link.name}</NavLink>
                </div>
            ))}
        </div>
    )
}
export default Navbar;
