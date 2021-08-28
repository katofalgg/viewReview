import Main_advice from "./Main_advice";
import Main_novelty from "./Main_novelty";
import React, { Component, useState } from 'react'
import classes from './Main.module.css'
import { Gradient } from 'react-gradient';
import Search_result from "./Search_result";
import { useContext } from "react";
import { SearchContext } from "../Comman/SearchContext";

const Main: React.FC = () => {
  const {activeSearch} = useContext(SearchContext);
  const gradients1 = [
      ['#CB6F6F', '#587EB8'],
      ['#D48A7B', '#826FB2'],
    ];
    const gradients2 = [
      ['#355C7D', '#f39b6f'],
      ['#355C7D', '#f39b6f'],
    ];
    console.log(activeSearch);
  return(
      <>
      {activeSearch ? <Search_result/>  : null}
      <div className={classes.gradient}>
      <Gradient
      gradients={ gradients1 }
      property="background"
      duration={ 10000 }
      angle="90deg"
      transitionType="sequential"
      >
        <Main_advice />
      </Gradient>
      </div>
      <div className={classes.gradient}>
      <Gradient
      gradients={ gradients1 }
      property="background"
      duration={ 10000 }
      angle="90deg"
      transitionType="sequential"
      > 
      <Main_novelty/>
      </Gradient> 
      </div>  
    </>
  )
}
export default Main;

