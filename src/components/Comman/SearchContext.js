import React, { createContext, useContext, useEffect, useState } from "react";
import { sendRequest } from "../Request";
import { EntryContext } from "./Form";
export const SearchContext = createContext();

const SearchContextProvider = props => {
    const [page, setPage] = useState(1);
    const [films, setFilms] = useState([]);
    const searchEntry = useContext(EntryContext);
    console.log(searchEntry)
    const searchButtonClick = (event) => {
        const requestURL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchEntry}&page=${page}` 
        console.log(requestURL)
        sendRequest('GET', requestURL)
          .then(response => {
            setPage(1);
            setFilms([...films, ...response.films]);
            // console.log(response)
            console.log(searchEntry)
          })
          .catch(error => {
            console.log(
              "error",
              error
            );
        });
    }
    return(
        <SearchContext.Provider value={{page, films, searchButtonClick}}>
          {props.children}
        </SearchContext.Provider>

    );
};
export default SearchContextProvider;