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
      ['#F39BA7 ', '#8D9FEC'],
      ['#95D0F7', '#FBC1C9'],
    ];
    
  return(
      <div className={classes.main}>
      <div className={classes.gradient}>
      <Gradient
      gradients={ gradients1 }
      property="background"
      duration={ 10000 }
      angle="90deg"
      transitionType="sequential"
      >
        {activeSearch ? <Search_result/>  : null}
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
    </div>
  )
}
export default Main;

