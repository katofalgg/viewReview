export var addNote = function (note) { return ({
    type: "ADD_NOTE",
    payload: note
}); };
export var addReview = function (review) { return ({
    type: "ADD_REVIEW",
    payload: review
}); };
