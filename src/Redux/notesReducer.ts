import {ActionNote} from "./actions";

export interface NotesState {
    notes: string[]
}

const defaultrootState = {
    notes: []
}
export const notesReducer = (state: NotesState = defaultrootState, action: ActionNote) => {
    switch (action.type) {
        case 'ADD_NOTE': {
            return {...state, notes: [...state.notes, action.payload]}
        }
        default:
            return state
    }
}
