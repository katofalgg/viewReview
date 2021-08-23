import React from "react";
import classes from './Comman.module.css'

interface IButtonProps {
    style: string;
    name: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<IButtonProps> = ({style, name, onClick}) => {
    return (
        <>
            <button className={style} onClick={onClick}> {name}</button>
            
        </>
    )
}
export default Button;