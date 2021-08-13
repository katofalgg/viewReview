
import Navbar from "./Navbar";
import React, { Component, useState } from 'react'
import Button from "./Button";
import Form from "./Form";
import classes from './Comman.module.css'
const Header: React.FC = () => {
    const [category, setCategory] = useState<string>();
    return (
        <div className={classes.header}>
            <Navbar/>
            <h1 className={classes.title}>ViewReview</h1>
            <Form/>
            <div className={classes.log}>
            <Button style={classes.button_log} name={"Sign Out"} onClick={() => setCategory("SignOut")}/>
            <Button style={classes.button_log} name={"Log Out"} onClick={() => setCategory("SignIn")}/>
            </div>
        </div>
    )
}
export default Header;