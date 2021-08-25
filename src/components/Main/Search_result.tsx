import React from "react";
import { useContext } from "react";
import { SearchContext } from "../Comman/SearchContext";
import classes from './Main.module.css';
const Search_result: React.FC  = () => {
    const {page, films} = useContext(SearchContext);
    
    return(
        <>
        <div className={classes.sign}>
            <ul>
            {films.map(element => (
            <li> 
                <figure> 
                    <img src={element.posterUrl}/>
                    <figcaption>{element.nameRu}</figcaption>
                </figure>
            </li>
            ))}
            </ul>
        </div>
        </>
    )
}
export default Search_result;