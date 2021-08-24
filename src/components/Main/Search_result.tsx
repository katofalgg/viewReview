import React from "react";
import { useContext } from "react";
import { SearchContext } from "../Comman/SearchContext";

const Search_result: React.FC  = () => {
    const {page, films} = useContext(SearchContext);
    // console.log(films)
    return(
        <>
            <h1>HH</h1>
        </>
    )
}
export default Search_result;