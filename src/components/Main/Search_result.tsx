import React from "react";
import {useContext, useState} from "react";
import {SearchContext, SearchContextType} from "../Comman/SearchContext";
import s from './Main.module.css';
import Modal from "../Modal/Modal";
import Loader from "../Comman/Loader";

export type elementType = {
    filmId: number,
    nameRu: string,
    type: string,
    year: string,
    description: string,
    filmLength: string,
    countries:[{country: string}],
    genres:[{genre: string},],
    rating: string,
    ratingVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string
}

const Search_result: React.FC = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalFilm, setModalFilm] = useState({
        filmId: 0,
        nameRu: '',
        type:'',
        year:'',
        description:'',
        filmLength:'',
        countries:[{country:''}],
        genres:[
            {genre:''},
        ],
        rating:'',
        ratingVoteCount: 0,
        posterUrl:'',
        posterUrlPreview:''
    })
    const {films, loaded, searchEntry}: SearchContextType = useContext(SearchContext);
    const openModal = (element: elementType) => {
        setModalFilm(element)
        setModalActive(true);
    }
    
    return (
        <>
            <div className={s.search_container}>
                <h1>Результат поиса по запросу: "{searchEntry}"</h1>
                <div>
                    {loaded ? <ul>
                        {films.map((element: elementType) => (
                            <li>
                                <Modal active={modalActive} setActive={setModalActive}>
                                    <h2>{modalFilm.nameRu}</h2>
                                    <h3>Год выпуска: {modalFilm.year}</h3>
                                    <h3>Длина фильма: {modalFilm.filmLength}</h3>
                                    <h3>Жанр: {modalFilm.genres.map((el, index, array) => index === array.length - 1 ? el.genre : `${el.genre}, `)}</h3>
                                    <h3>Рейтинг: {modalFilm.rating}</h3>
                                    <h3>Описание: {modalFilm.description}</h3>
                                </Modal>  
                                <figure key={element.nameRu} className={s.sign} onClick={() => openModal(element)}>
                                    <img src={element.posterUrl} alt=''/>
                                    <figcaption>{element.nameRu}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul> : <Loader/>}

                </div>
            </div>

        </>
    )
}
export default Search_result;
