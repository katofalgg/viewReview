import React from "react";
import app from "../Login/base";
import { NotesState } from "../../Redux/notesReducer";
import { useSelector, useDispatch } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";
import { addNote } from '../../Redux/actions';


const Home:React.FC = () => {
  
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <h1>Личный кабинет</h1>
      <NewNoteInput addNote={onAddNote}/>
      <hr/>
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
      <button onClick={() => app.auth().signOut()}>Выйти</button>
    </>
  );
};

export default Home;
