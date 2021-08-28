import React, { createContext, useContext, useEffect, useState } from "react";
import { sendRequest } from "../Request";
import { Redirect } from "react-router";
export const SearchContext = createContext();

const SearchContextProvider = props => {
    const [page, setPage] = useState(1);
    const [films, setFilms] = useState([]);
    const [searchEntry, setsearchEntry] = useState('');
    const [loaded, setLoaded] = useState(true);

    const updateSearchInput = (e) => {
      setsearchEntry(e.target.value);
  }
  const keyPressHandler = (e) => {
    if (e.key === 'Enter'){
      searchButtonClick();
    }
  }
    const searchButtonClick = (event) => {
      setLoaded(false);
        const requestURL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchEntry}&page=${page}` 
        sendRequest('GET', requestURL)
          .then(response => {
            setPage(1);
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
        <SearchContext.Provider value={{page, films, searchEntry, searchButtonClick, updateSearchInput, keyPressHandler, loaded}}>
          {props.children}
        </SearchContext.Provider>

    );
};
export default SearchContextProvider;