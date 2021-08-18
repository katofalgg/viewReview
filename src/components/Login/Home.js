import React from "react";
import app from "./base";

const Home = () => {
  return (
    <>
      <h1>Личный кабинет</h1>
      <button onClick={() => app.auth().signOut()}>Выйти</button>
    </>
  );
};

export default Home;
