import {createContext, SetStateAction, useState} from "react";
import {sendRequest} from "../Request";
import { elementType } from "../Main/Search_result";

export type SearchContextType = {
    page?: string,
    films?: elementType[],
    searchEntry?: string,
    loaded?: true,
    activeSearch?: false,
    searchButtonClick?: () => void,
    updateSearchInput?: () => void,
    keyPressHandler?: () => void
}

export const SearchContext = createContext({});

const SearchContextProvider: React.FC = props => {
    const [page, setPage] = useState(1);
    const [films, setFilms] = useState([]);
    const [searchEntry, setsearchEntry] = useState('');
    const [loaded, setLoaded] = useState(true);
    const [activeSearch, setActiveSearch] = useState(false);

    console.log(props);
    const updateSearchInput = (e: { target: { value: SetStateAction<string>; }; }) => {
        setsearchEntry(e.target.value);
    }
    const keyPressHandler = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            searchButtonClick();
        }
    }
    const searchButtonClick = () => {
        setActiveSearch(true);
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
    return (
        <SearchContext.Provider value={{
            page,
            films,
            searchEntry,
            searchButtonClick,
            updateSearchInput,
            keyPressHandler,
            loaded,
            activeSearch
        }}>
            {props.children}
        </SearchContext.Provider>

    );
};
export default SearchContextProvider;
