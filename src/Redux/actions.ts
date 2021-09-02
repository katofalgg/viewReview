export type ActionNote = {
    type: 'ADD_NOTE';
    payload: string;
}
export const addNote = (note: string): ActionNote => ({
    type: "ADD_NOTE",
    payload: note,
});
export type ActionReview = {
    type: 'ADD_REVIEW';
    payload: string;
}
export const addReview = (review: string): ActionReview => ({
    type: "ADD_REVIEW",
    payload: review,
});