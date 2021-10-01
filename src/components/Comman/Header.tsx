import Navbar from "./Navbar";
import React from 'react'
import Form from "./Form";
import classes from './Comman.module.css'


const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <Navbar/>
            <h1 className={classes.title}>ViewReview</h1>
            <Form/>
        </div>
    )
}
export default Header;
