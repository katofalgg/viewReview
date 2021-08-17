import React, { useState, useEffect } from 'react';
// import { resolvers} from '../Request';
import classes from './Content_list.module.css'

interface IContentProps {
    category: string; 
}

const Content: React.FC <IContentProps>  = ({category}) => {
    const [films, setFilms] = useState<any[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const headers = {
        'accept' : 'application/json', 
        'X-API-KEY' : '12c15430-9199-4e20-b554-373d3d40df43'
    }
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            query: `
            query {
                pagesCount
                films {
                    posterUrl
                }
            }
            `
        })
    })
    .then (res => res.json())
    .then (data => {
        console.log(data.data)
    })
    
         
    return(
        <div>
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