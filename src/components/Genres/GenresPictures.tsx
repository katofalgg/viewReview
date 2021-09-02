import React, {useState} from "react";
import s from './Genres.module.css';
import Modal from '../Modal/Modal';

interface IGenrProps {
   films: Record<string, any>[] 
}


const GenresPict: React.FC<IGenrProps> = ({films}) => {
    const [modalActive, setModalActive] = useState(false);
    const [modalFilm, setModalFilm] = useState({nameRu: '', year: '', filmLength: '', rating:'', description: ''});

    const openModal = (element) => {
        setModalFilm(element)
        setModalActive(true);
        console.log(modalFilm.description)
    }
    
    return(
        <div  className={s.container}> 
            <ul>
            {films.map(element => (
            <li> 
                <Modal active={modalActive} setActive={setModalActive} >
                    <h2>{modalFilm.nameRu}</h2>
                    <h3>Год выпуска: {modalFilm.year}</h3>
                    <h3>Рейтинг: {modalFilm.rating}</h3>    
                </Modal>
                <figure className={s.sign} onClick={() => openModal(element)} > 
                    <img src={element.posterUrl}/>
                    <figcaption>{element.nameRu}</figcaption>
                </figure>
            </li>
            ))}
            </ul> 
        </div>
    )
}
export default GenresPict;