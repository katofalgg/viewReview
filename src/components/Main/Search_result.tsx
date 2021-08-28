import React from "react";
import { useContext, useState } from "react";
import { SearchContext } from "../Comman/SearchContext";
import classes from './Main.module.css';
import Modal from "../Modal/Modal";

const Search_result: React.FC  = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalFilm, setModalFilm] = useState({nameRu: '', year: '', filmLength: '', rating:'', genres: [{ genre: ''}], description: ''})
    const {page, films} = useContext(SearchContext);
    const openModal = (element) => {
        setModalFilm(element)
        setModalActive(true);
    }
    return(
        <>
        <div className={classes.sign}>
            <ul>
            {films.map(element => (
            <li> 
                <Modal active={modalActive} setActive={setModalActive} >
                    <h2>{modalFilm.nameRu}</h2>
                    <h3>Год выпуска: {modalFilm.year}</h3>
                    <h3>Длина фильма: {modalFilm.filmLength}</h3>
                    <h3>Жанр: {modalFilm.genres.map((el, index, array) => index === array.length - 1 ? el.genre : `${el.genre}, `)}</h3>
                     <h3>Рейтинг: {modalFilm.rating}</h3>
                     <h3>Описание: {modalFilm.description}</h3>
                </Modal>
                <figure onClick={() => openModal(element)}> 
                    <img src={element.posterUrl}/>
                    <figcaption>{element.nameRu}</figcaption>
                </figure>
            </li>
            ))}
            </ul>
        </div>
        </>
    )
}
export default Search_result;