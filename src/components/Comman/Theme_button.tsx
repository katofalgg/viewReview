import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import classes from './Comman.module.css';
import { ThemeContext } from "./ThemeContext";
const moon = require('../../assets/moon.png').default;
const sun = require('../../assets/sun.png').default;


const ThemeContextProvider:React.FC = () => {
    const {theme, changeTheme} = useContext(ThemeContext);
  return (
        <div className={classes.theme_button}>
            <button onClick={() => changeTheme()}>
                <img src={theme=== 'light'? moon : sun}/>
            </button>
        </div>
  );
};

export default ThemeContextProvider;