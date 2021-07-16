import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../../styles";
import classes from './Comman.module.css'
const Navbar = () => {
    const links = [
        {path: "/main", name: 'Главная'},
        {path: "/content_list", name: 'Контент'},
        {path: "/genres", name: 'Жанры'},
        {path: "/authors", name: 'Авторы'},
    ]

    return(
        <div className={classes.navbar}>
            {links.map(link => (
                <div>
                    <NavLink to={link.path} style={styles.navlink}>{link.name}</NavLink>
                </div>
            ))}
        </div>
    )
}
export default Navbar;