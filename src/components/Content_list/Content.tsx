import React, { useState, useEffect } from 'react';
import classes from './Content_list.module.css'
import {sendRequest} from '../Request'
import classNames from 'classnames';
import Content_list from './Content_list';
interface IContentProps {
    category: string,
    optionalArgument?: string;
    page: number,
}

const Content: React.FC<IContentProps & React.HTMLAttributes<HTMLDivElement>> = ({category, page}) => {
    const [films, setFilms] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    const requestURL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`

    useEffect(() => {
        sendRequest('GET', requestURL)
        .then(response => {
            setFilms([...films, ...response.films]);
            console.log(films, page)
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
        <div className={classes.container}>
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