
import React from "react";
import { useState, useEffect } from "react";
import {sendRequest} from '../Request';
import s from './Genres.module.css';



const Genres: React.FC = () => {
    const [genreID, setGenreID] = useState<number>(3);
    const [loaded, setLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1);
    const genres = [
        {name: 'Боевик', id: 3},
        {name: 'Вестерн', id: 13},
        {name: 'Аниме', id: 1750},
        {name: 'Драма', id: 8},
        {name: 'Комедия', id: 6},
        {name: 'Фантастика', id: 2},
    ] 
    const requestURL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${genreID}&page=${page}`;

    const filmsFetch = async () => await sendRequest('GET', requestURL)
        .then(response => {
            return response.films;
        }).catch(error => {
            console.log(
              "error",
              error
            );
        });

useEffect(() => { 
    const fetch = async() => {
         filmsFetch().then(films => {
            setFilms(films);
            setLoaded(true);
         })
    }
    fetch()
    console.log('обновл жанр')
    setPage(1)
}, [genreID])

useEffect(() => {
    const fetch = async() => {
        filmsFetch().then(arr => {
           setFilms([...films, ...arr])
           setLoaded(true);
        })
   }
   fetch()
   console.log(page)
   console.log(requestURL)
}, [page])

    return(
        <div  className={s.container}> 
            {genres.map(genreList => (
                <div>
                <button className={s.button_g} onClick={() => setGenreID(genreList.id)}>{genreList.name}</button>
                </div>    
            ))}
            <ul>
            {films.map(element => (
            <li> 
                <figure className={s.sign}> 
                    <img src={element.posterUrl}/>
                    <figcaption>{element.nameRu}</figcaption>
                </figure>
            </li>
            ))}
            </ul>
            <button onClick={() => setPage(page + 1)}>{"Показать ещё"}</button> 
        </div>
    )
}
export default Genres;