import React, { useState, useEffect } from 'react';
import {sendRequest} from '../Request';
import classes from './Main.module.css';

const Main_novelty: React.FC  = () => {
    const [films, setFilms] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1);
    const requestURL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=2021&yearTo=2021&page=${page}`

    useEffect(() => {
        sendRequest('GET', requestURL)
        .then(response => {
            setFilms([...films, ...response.films]);
            setLoaded(true);
        })
        .catch(error => {
            console.log(
              "error",
              error
            );
        }); 

}, [page])
    return(
        <><div className={classes.scrollmenu}>
        <h1>Новинки</h1>
    <ul>
        {films.map(element => (
        <li> 
            <figure> 
                <img src={element.posterUrl}/>
                <figcaption>{element.nameRu}</figcaption>
            </figure>
        </li>
        ))}
        <button onClick={() => setPage(page + 1)}>Еще</button>
    </ul>
    
    </div>
        </>
    )
}
export default Main_novelty;