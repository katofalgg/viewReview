import React from "react";
import { useContext, useState } from "react";
import { SearchContext } from "../Comman/SearchContext";
import s from './Main.module.css';
import Modal from "../Modal/Modal";
import Loader from "../Comman/Loader";


const Search_result: React.FC  = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalFilm, setModalFilm] = useState({nameRu: '', year: '', filmLength: '', rating:'', genres: [{ genre: ''}], description: ''})
    const {films, loaded, searchEntry} = useContext(SearchContext);
    const openModal = (element) => {
        setModalFilm(element)
        setModalActive(true);
    }
    return(
        <> 
        <div className={s.search_container}>
        <h1>Результат поиса по запросу: "{searchEntry}"</h1>
        <div>
            {loaded ? <ul>
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
                <figure className={s.sign} onClick={() => openModal(element)}> 
                    <img src={element.posterUrl}/>
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