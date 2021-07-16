import Main_advice from "./Main_advice";
import Button from "../Comman/Button";
import Main_novelty from "./Main_novelty";
import React, { Component, useState } from 'react'
import classes from './Main.module.css'
const Main = () => {
    const [category, setCategory] = useState();
    return(
        <div>
            
            <Button style={classes.button} name={"Movie"} onClick={() => setCategory("Movie")}/>
            <Button style={classes.button} name={"Book"} onClick={() => setCategory("Book")}/>
            <Main_advice category={category}/>
            <Main_novelty category={category}/>
            
        </div>
    )
}
export default Main;

