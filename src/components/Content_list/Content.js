import React, { useState, useEffect } from 'react';
import { sendRequest } from '../Request';
import classes from './Content_list.module.css'
const Content = ({category}) => {
    const [films, setFilms] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const requestURL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'
    if (category === "Movie") {
        sendRequest('GET', requestURL)
        .then(response => {
            setFilms(response.films);
            setLoaded(true);
        })
        .catch(error => {
            console.log(
              "error",
              error
            );
        }); 
    }
    
    return(
        <div className={classes}>
            <script scr="Request.js"></script>
            <ul>
            {films.map(element => (
            <li> 
                <figure className={classes.sign}> 
                    <img src={element.posterUrl}/>
                    <figcaption>{element.nameRu}</figcaption>
                </figure>
            </li>
            ))}
            </ul>
        </div>

    )
};
export default Content;