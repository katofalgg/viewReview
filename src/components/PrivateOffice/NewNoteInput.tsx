import React from "react";
import { ChangeEvent } from "react";
import { useState } from "react";

interface NewNoteInputProps {
    addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addNote}) => {
    const [note, setNote] = useState('')

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  }
  const onAddNoteClick = () => {
    addNote(note);
    setNote('');
  }
  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter'){
        onAddNoteClick()
    }
  }
    return(
        <>
        <h2>Список фильмов для просмотра</h2>
        <input 
        type='text'
        name='note'
        placeholder='Фильм'
        onChange={updateNote}
        value={note}
        onKeyPress={keyPressHandler}
      />
      <button onClick={onAddNoteClick} >Добавить</button>
    </>
    )
};