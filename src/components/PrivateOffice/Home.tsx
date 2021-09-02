import React from "react";
import app from "../Login/base";
import { useSelector, useDispatch } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";
import { addNote } from '../../Redux/actions';
import UsersInformation from "./UsersInformation";
import classes from './Account.module.css'

const Home:React.FC = () => {
  
  const notes = useSelector(
    /* @ts-ignore */
    (state) => state.notes.notes);
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div className={classes.field_acc}>
      <div className={classes.inputFilms}>
      <NewNoteInput  addNote={onAddNote}/>
      
      <ol>
        {notes.length > 0 ? notes.map((note) => {
          return <li key={note}>{note}</li>;
        }) : <h3>Фильмы отсутсвуют</h3>}
      </ol>
      </div>
      <div className={classes.info}>
      <UsersInformation/>
      <button onClick={() => app.auth().signOut()}>Выйти</button>
      </div>
    </div>
  );
};

export default Home;

