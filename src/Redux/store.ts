import {combineReducers, createStore} from "redux";
import {notesReducer} from './notesReducer';
import {reviewReducer} from './reviewReducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    reviews: reviewReducer,
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);

