import React, { createContext, useContext, useEffect, useState } from "react";
import { sendRequest } from "../Request";
import { Redirect } from "react-router";
export const SearchContext = createContext();

const SearchContextProvider = props => {
    const [page, setPage] = useState(1);
    const [films, setFilms] = useState([]);
    const [searchEntry, setsearchEntry] = useState('');

    const updateSearchInput = (e) => {
      setsearchEntry(e.target.value);
  }
  const keyPressHandler = (e) => {
    if (e.key === 'Enter'){
      // console.log(searchEntry)
    }
  }
    const searchButtonClick = (event) => {
        const requestURL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchEntry}&page=${page}` 
        sendRequest('GET', requestURL)
          .then(response => {
            setPage(1);
            setFilms(response.films);
            
          })
          .catch(error => {
            console.log(
              "error",
              error
            );
        });
    }
    return(
        <SearchContext.Provider value={{page, films, searchEntry, searchButtonClick, updateSearchInput, keyPressHandler}}>
          {props.children}
        </SearchContext.Provider>

    );
};
export default SearchContextProvider;