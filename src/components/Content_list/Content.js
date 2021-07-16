import React from 'react';
import classes from './Content_list.module.css'
import s from '../Comman/Comman.module.css'
const img0 = require('../../assets/pict_0.jpg').default;
const img1 = require('../../assets/pict_1.jpg').default;
const img2 = require('../../assets/pict_2.jpg').default;
const img3 = require('../../assets/pict_3.jpg').default;
const img4 = require('../../assets/pict_4.jpg').default;
const img5 = require('../../assets/pict_5.jpg').default;
const img6 = require('../../assets/pict_6.jpg').default;
const img7 = require('../../assets/pict_7.jpg').default;
const img8 = require('../../assets/pict_8.jpg').default;
const img9 = require('../../assets/pict_9.jpg').default;
const img10 = require('../../assets/pict_10.jpg').default;
const Content = ({category}) => {
    let image = [];
    if (category === "Book") {
         image = [{path: img3, name: "Пролетая над гнездом кукушки"}, {path: img4, name: "Пикник на обочине"}, {path: img5, name: "Тошнота"},
        {path: img6, name: "Заводной апельсин"},{path: img7, name: "Москва-Петушки"}, {path: img8, name: "Реструкт"}]
    } else if (category === "Movie") {
         image = [ {path: img0, name: "Криминальное чтиво"}, {path: img1 , name: "Однажды в Голливуде"}, {path: img2 , name: "Комната"},
          {path: img9, name: "Я видел дьявола"}, {path: img10, name: "Довод"}]
    } else {
        return null
    }
    if (!category){
        return null
    }
    return (
        <div className={s.container}>
            <ul>
            {image.map(element => (
            <li> 
                <figure class={classes.sign}> 
                    <img src={element.path}/>
                    <figcaption>{element.name}</figcaption>
                </figure>
            </li>
            ))}
            </ul>
        </div>
    )
}
export default Content;