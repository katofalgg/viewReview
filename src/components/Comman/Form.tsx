import React, { useState } from "react";
import { useEffect } from "react";
import { sendRequest } from "../Request";
import classes from './Comman.module.css'
const Form: React.FC = () => {
    const [searchEntry, setsearchEntry] = useState('');
    const [page, setPage] = useState(1);
    const [films, setFilms] = useState([]);

    const updateSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsearchEntry(e.target.value);
    }
    const keyPressHandler = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter'){
        console.log(searchEntry)
      }
    }
    const searchButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const requestURL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchEntry}&page=${page}`
        sendRequest('GET', requestURL)
        .then(response => {
          setPage(1);
          setFilms([...films, ...response.films]);
          
          console.log(response)
        })
        .catch(error => {
          console.log(
            "error",
            error
          );
      });
    }

    return(
      <div className={classes.search}>
        <button 
        type="submit" 
        className={`${classes.search_button} ${searchEntry.trim() ? "active" : null}`}
        disabled={!searchEntry.trim()}
        onClick={searchButtonClick}
        >
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#0B0A0B"
            fillRule="evenodd"
          />
        </svg>
        </button>
        <input
        className={classes.search_field}
        type="text"
        name="search"
        placeholder="Поиск"
        onChange={updateSearchInput}
        value={searchEntry}
        onKeyPress={keyPressHandler}
        />
        
    </div>
    )
}
export default Form;