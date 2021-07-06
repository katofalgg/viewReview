import React from 'react';
const img0 = require('../assets/pict_0.jpg').default;
const img1 = require('../assets/pict_1.jpg').default;
const img2 = require('../assets/pict_2.jpg').default;
const img3 = require('../assets/pict_3.jpg').default;
const img4 = require('../assets/pict_4.jpg').default;


const Content = ({category}) => {
    let image = [];
    if (category === "Book") {
         image = [{path: img3, name: "Пролетая над гнездом кукушки"}, {path: img4, name: "Пикник на обочине"} ]
    } else{
         image = [ {path: img0, name: "Криминальное чтиво"}, {path: img1 , name: "Однажды в Голливуде"}, {path: img2 , name: "Комната"}, ]
    }
    if (!category){
        return null
    }
    return (
        <div>
            <ul>
            {image.map(element => (
            <li> 
                <figure class="sign"> 
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