import {RECEIVED_FILMS, SEARCH_BY, SORT_BY} from './actions';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVED_FILMS:
            return {...state, films: action.payload};
        case SEARCH_BY:
            return {...state, searchBy: action.payload};
        case SORT_BY:
            return {...state, sortBy: action.payload};
        default:
            return state;
    }
};

export default reducer;