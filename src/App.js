import React, { Component, useState } from 'react'
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Content from './components/Content';
import Form from "./components/Form";


const App = () => {
  const [category, setCategory] = useState();

    return (
      <div className="container">
        <div className="header"> 
          <Header />
        </div>
        <div className="search">
        <Form/>
        </div>
        <div className="container-button"> 
          <Button name={"Movie"} onClick={() => setCategory("Movie")}/>
          <Button name={"Book"} onClick={() => setCategory("Book")}/>
          
        </div>
      <Content className="content" category={category}/>
      </div>
      
    )
}

export default App;
