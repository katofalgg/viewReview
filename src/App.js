import React, { Component, useState } from 'react'

import { Gradient } from 'react-gradient';
import Footer from './components/Comman/Footer';
import Main from './components/Main/Main';
import Authors from './components/Authors/Authors';
import { BrowserRouter, Route } from 'react-router-dom';
import Genres from './components/Genres';
import Header from './components/Comman/Header';
import classes from './components/Comman/Comman.module.css'
import Content_list from './components/Content_list/Content_list';

const App = () => {
  const gradients1 = [
    ['#EF315B', '#F49F1E'],
    ['#E03131 ', '#F49F1E'],
  ];
  const gradients2 = [
    ['#F49F1E', '#EF315B '],
    ['#F49F1E', '#E03131 '],
  ];
  return (
    <BrowserRouter> 
    
      <div className={classes.main}>
      <Gradient
        className={classes.empty_space_left}
        gradients={ gradients1 }
        property="background"
        duration={ 10000 }
        angle="90deg">
      <div />
      </Gradient> 
      <Header/>
      <div className={classes.container}>
        <Route path="/main" component={Main}/>
        <Route path="/content_list" component={Content_list}/>
        <Route path="/genres" component={Genres}/>
        <Route path="/authors" component={Authors}/>
      </div>
      <Footer/> 
      <Gradient
        className={classes.empty_space_right}
        gradients={ gradients2 }
        property="background"
        duration={ 10000 }
        angle="90deg">
      </Gradient>
    </div>
  </BrowserRouter>  
  )
}

export default App;
