import { render } from "@testing-library/react";
import React from "react";
import '../../index';
import classes from './Comman.module.css'
const Footer = () => {
    return(
        <footer className={classes.footer}>
        <div class="site-footer">
        <p>© Katofalgg, 2021</p>
        <p>Сайт для поиска рецензий</p>
        </div>     
        </footer>
    )
}
export default Footer;