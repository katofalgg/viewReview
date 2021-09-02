import React, { useState, useEffect } from 'react';
import {sendRequest} from '../Request';
import classes from './Main.module.css';
import Modal from '../Modal/Modal';

const Main_novelty: React.FC  = () => {
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1);
    const [modalActive, setModalActive] = useState(false);
    const [modalFilm, setModalFilm] = useState({nameRu: '', year: '', filmLength: '', rating:'', genres: [{ genre: ''}]});

    const requestURL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=2021&yearTo=2021&page=${page}`

    useEffect(() => {
        sendRequest('GET', requestURL)
        .then(response => {
            setFilms([...films, ...response.films]);
        })
        .catch(error => {
            console.log(
              "error",
              error
            );
        }); 

}, [page]);
const openModal = (element) => {
    setModalFilm(element)
    setModalActive(true);
}
    return(
        <>
        <div className={classes.scrollmenu}>
        <h1>Новинки</h1>
        <ul>
        {films.map(element => (
        <li> 
            <Modal active={modalActive} setActive={setModalActive} >
                    <h2>{modalFilm.nameRu}</h2>
                    <h3>Год выпуска: {modalFilm.year}</h3>
                    <h3>Длина фильма: {modalFilm.filmLength}</h3>
                    <h3>Жанр: {modalFilm.genres.map((el, index, array) => index === array.length - 1 ? el.genre : `${el.genre}, `)}</h3>
                    <h3>Рейтинг: {modalFilm.rating}</h3>
                </Modal>
            <figure className={classes.sign} onClick={() => openModal(element)}> 
                <img src={element.posterUrl}/>
                <figcaption>{element.nameRu}</figcaption>
            </figure>
        </li>
        ))}
        <button onClick={() => setPage(page + 1)}>Еще</button>
    </ul>
    
    </div>
        </>
    )
}
export default Main_novelty;