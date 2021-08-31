import React from "react";
import app from "../Login/base";
import { NotesState } from "../../Redux/notesReducer";
import { useSelector, useDispatch } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";
import { addNote } from '../../Redux/actions';
import UsersInformation from "./UsersInformation";
import classes from './Account.module.css'

const Home:React.FC = () => {
  
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div className={classes.field_acc}>
      <div className={classes.inputFilms}>
      <NewNoteInput  addNote={onAddNote}/>
      
      <ol>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
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
