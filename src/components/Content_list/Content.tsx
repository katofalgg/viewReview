import React, { useState, useEffect } from 'react';
import classes from './Content_list.module.css';
import {sendRequest} from '../Request';
import Modal from '../Modal/Modal';

interface IContentProps {
    optionalArgument?: string;
    page: number,
}

const Content: React.FC<IContentProps & React.HTMLAttributes<HTMLDivElement>> = ({page}) => {
    const [films, setFilms] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [modalFilm, setModalFilm] = useState({nameRu: '', year: '', filmLength: '', rating:'', genres: [{ genre: ''}]})

    const requestURL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`

    useEffect(() => {
        sendRequest('GET', requestURL)
        .then(response => {
            setFilms([...films, ...response.films]);
            setLoaded(true);
        })
        .catch(error => {
            console.log(
              "error",
              error
            );
        }); 

}, [page])
const openModal = (element) => {
    setModalFilm(element)
    setModalActive(true);
}
    return(
        <>
            <div className={classes.container}>
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
                    <img src={element.posterUrl} />
                    <figcaption>{element.nameRu}</figcaption>
                </figure>
            </li>
            ))}
            </ul>
        </div>
        </>
    )
};
export default Content;