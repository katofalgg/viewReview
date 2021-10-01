import React from "react";
import '../../index';
import classes from './Comman.module.css'


const Footer: React.FC = () => {
    return (
        <footer className={classes.footer}>
            <div className="site-footer">
                <p>© Katofalgg, 2021</p>
                <p>Сайт для поиска рецензий</p>
            </div>

        </footer>
    )
}
export default Footer;
