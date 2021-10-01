import React from "react";
import {useContext} from "react";
import {Link} from "react-router-dom";
import classes from './Comman.module.css';
import {SearchContext, SearchContextType} from "./SearchContext";


const Form: React.FC = () => {
    const {searchEntry, searchButtonClick, updateSearchInput, keyPressHandler}: SearchContextType = useContext(SearchContext);

    return (

        <div className={classes.search}>
            <Link
                type="submit"
                className={`${classes.search_link} ${searchEntry.trim() ? "active" : null}`}
                to={'/main'}
                onClick={() => searchButtonClick()}
            >
                <svg height="37" width="37">
                    <path
                        d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                        fill="#dee5eb"
                        fillRule="evenodd"
                    />
                </svg>
            </Link>
            <input
                className={classes.search_field}
                type="text"
                name="search"
                placeholder=" Поиск"
                onChange={updateSearchInput}
                value={searchEntry}
                onKeyPress={keyPressHandler}
            />
        </div>
    )
}
export default Form;
