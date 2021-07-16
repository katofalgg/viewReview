import classes from './Content_list.module.css'

import Content from "./Content";
import React, { Component, useState } from 'react'
import Button from '../Comman/Button'

const Content_list = () => {
    const [category, setCategory] = useState();
    return (
    <div>        
        <div className={classes.container_button}> 
          <Button style={classes.button} name={"Movie"} onClick={() => setCategory("Movie")}/>
          <Button style={classes.button} name={"Book"} onClick={() => setCategory("Book")}/>
        </div>  
      <Content category={category}/>
    </div>    
    )
}
export default Content_list;