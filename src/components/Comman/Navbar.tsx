import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../../styles";
import classes from './Comman.module.css'
const Navbar: React.FC = () => {
    const links = [
        {path: "/main", name: 'Все фильмы'},
        {path: "/content_list", name: 'ТОП-250'},
        {path: "/genres", name: 'Жанры'},
        {path: "/authors", name: 'Рецензии'},
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