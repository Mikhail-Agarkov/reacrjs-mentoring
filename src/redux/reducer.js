import {RECEIVED_FILM_INFO, RECEIVED_FILMS, SEARCH_BY, SORT_BY} from './actions';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVED_FILMS:
            return {...state, films: action.payload};
        case RECEIVED_FILM_INFO:
            console.log(action.payload);
            return {...state, filmInfo: action.payload};
        case SEARCH_BY:
            return {...state, searchBy: action.payload};
        case SORT_BY:
            return {...state, sortBy: action.payload};
        default:
            return state;
    }
};

export default reducer;