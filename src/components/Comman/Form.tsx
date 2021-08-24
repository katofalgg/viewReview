import React, { Children, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { sendRequest } from "../Request";
import classes from './Comman.module.css';
import { SearchContext } from "./SearchContext";

export const EntryContext = createContext('');

const Form: React.FC = () => {
    const [searchEntry, setsearchEntry] = useState('');
    const searchButtonClick = useContext(SearchContext);
    // console.log(searchButtonClick)
    const updateSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsearchEntry(e.target.value);
    }
    const keyPressHandler = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter'){
        // console.log(searchEntry)
      }
    }
    return(
      <EntryContext.Provider value={searchEntry}>
      <div className={classes.search}>
        <button 
        type="submit" 
        className={`${classes.search_button} ${searchEntry.trim() ? "active" : null}`}
        disabled={!searchEntry.trim()}
        onClick={() => searchButtonClick.searchButtonClick()}
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
    </EntryContext.Provider>
    )
}
export default Form;