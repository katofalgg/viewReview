import Main_advice from "./Main_advice";
import Button from "../Comman/Button";
import Main_novelty from "./Main_novelty";
import React, { Component, useState } from 'react'
import classes from './Main.module.css'
import { Gradient } from 'react-gradient';
import Search_result from "./Search_result";

const Main: React.FC  = () => {
    const gradients1 = [
        ['#CB6F6F', '#587EB8'],
        ['#D48A7B', '#826FB2'],
      ];
      const gradients2 = [
        ['#355C7D', '#f39b6f'],
        ['#355C7D', '#f39b6f'],
      ];
    return(
        <>
        <Search_result/>
        <Gradient
        gradients={ gradients1 }
        property="background"
        duration={ 10000 }
        angle="90deg"
        transitionType="sequential"
        > 
        <div className={classes.gradient}>
        <Main_advice />
        <Main_novelty/>
        </div>
        </Gradient>
            
            
      </>
    )
}
export default Main;

