import React from "react";
import s from './Genres.module.css';
interface IGenrProps {
   films: Record<string, any>[] 
}


const GenresPict: React.FC<IGenrProps> = ({films}) => {
    return(
        <div  className={s.container}> 
            <ul>
            {films.map(element => (
            <li> 
                <figure className={s.sign}> 
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