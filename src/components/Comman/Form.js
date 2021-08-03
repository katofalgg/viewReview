import React, { useState } from "react";
import classes from './Comman.module.css'
const Form = () => {
    const [searchEntry, setsearchEntry] = useState('');
    const updateSearchInput = e => {
        setsearchEntry(e.target.value);
    }
    return(
      <div className={classes.search}>
        <button 
        type="submit" //кнопка для отправки данных формы на сервер
        className={`${classes.search_button} ${searchEntry.trim() ? "active" : null}`}
        disabled={!searchEntry.trim()}
        >
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#ffffff"
            fillRule="evenodd"
          />
        </svg>
        </button>
        <input
        className={classes.search_field}
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={searchEntry}
        />
    </div>
    )
}
export default Form;