var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var defaultrootState = {
    notes: []
};
export var notesReducer = function (state, action) {
    if (state === void 0) { state = defaultrootState; }
    switch (action.type) {
        case 'ADD_NOTE': {
            return __assign(__assign({}, state), { notes: __spreadArray(__spreadArray([], state.notes), [action.payload]) });
        }
        default:
            return state;
    }
};
