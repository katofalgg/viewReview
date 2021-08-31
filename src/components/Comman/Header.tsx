
import Navbar from "./Navbar";
import React, { Component, useState } from 'react'
import Button from "./Button";
import Form from "./Form";
import classes from './Comman.module.css'
import Theme from "./Theme_button";


const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <Navbar/>
            <h1 className={classes.title}>ViewReview</h1>
            <Form/>
            <Theme/>     
        </div>
    )
}
export default Header;