import {review_1, review_2, review_3, review_4} from "../assets/reviews";
import {ActionReview} from "./actions";

export interface NotesState {
    reviews: string[]
}

const initialState = {
    reviews: [review_1, review_2, review_3, review_4]
}
export const reviewReducer = (state: NotesState = initialState, action: ActionReview) => {
    switch (action.type) {
        case 'ADD_REVIEW': {
            return {...state, reviews: [...state.reviews, action.payload]}
        }
        default:
            return state
    }
}
