import {combineReducers,createStore} from "redux";
import {notesReducer} from './notesReducer';
import { reviewReducer } from './reviewReducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    reviews: reviewReducer,
}); 
export const store = createStore(rootReducer);

