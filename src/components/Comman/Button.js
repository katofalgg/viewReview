import React from "react";
import classes from './Comman.module.css'

const Button = ({style,name, onClick}) => {
    return (
        <div>
            <button className={style} onClick={onClick}> {name}</button>
            
        </div>
    )
}
export default Button;