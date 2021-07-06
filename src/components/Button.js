import React from "react";
import '../index.css';

const Button = ({name, onClick}) => {
    return (
        <div>
            <button onClick={onClick}> {name}</button>
            
        </div>
    )
}
export default Button;