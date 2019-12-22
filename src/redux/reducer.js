import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import {
    FETCH_MOVIES,
    moviesSaga,
    RECEIVED_MOVIE_INFO,
    RECEIVED_MOVIES,
    SEARCH_BY,
    SEARCH_MOVIES,
    SORT_BY,
    VIEW_MOVIE,
} from './actions';

const reducer = (state = {}, action) => {
    switch (action.type) {
    case FETCH_MOVIES:
    case SEARCH_MOVIES:
    case VIEW_MOVIE:
        return { ...state };
    case RECEIVED_MOVIES:
        return { ...state, films: action.payload };
    case RECEIVED_MOVIE_INFO:
        return { ...state, filmInfo: action.payload };
    case SEARCH_BY:
        return { ...state, searchBy: action.payload };
    case SORT_BY:
        return { ...state, sortBy: action.payload };
    default:
        return state;
    }
};

function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
}

const rootReducer = combineReducers({
    movies: reducer,
});

export { rootReducer, rootSaga };
