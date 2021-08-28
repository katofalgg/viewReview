import React from "react";
import firebase from "firebase/app";
import { useState } from "react";
import app from "../Login/base";


// const defaultDatabase = firebase.database();

const Review: React.FC  = () => {
    // const [text, setText] = useState('');

    // const onTextUpdate = (e) => {
    //     setText(e.target.value)
    // }
    // const OnSubmit = (e) => {
    //     e.preventDefault()
    //     defaultDatabase.ref('review/').set({
    //         text: text
    //     });
    // }
    // const FetchData = (e) => {
    //     e.preventDefault()
    //     const dbRef = firebase.database().ref("/review");
    //     dbRef.on('value', (snapshot) => {
    //         const data = snapshot.val();
    //         console.log(data);
    //     })
    // }

    return( 
        <>
        {/* <form onSubmit={OnSubmit}>
        <textarea value={text} onChange={onTextUpdate} /> 
        <button>Отправить</button>
        <button onClick={() => FetchData}>Получить</button>
        <h2>{text}</h2>
        </form> */}
        </>
    )
}
export default Review;