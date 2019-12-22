import {
    all, call, put, takeLatest,
} from 'redux-saga/effects';

const API_URL = 'https://reactjs-cdp.herokuapp.com/movies';

export const SEARCH_BY = 'SEARCH_BY';
export const SORT_BY = 'SORT_BY';

export const setSearchBy = (searchBy) => ({
    type: SEARCH_BY,
    payload: searchBy,
});

export const setSortBy = (sortBy) => ({
    type: SORT_BY,
    payload: sortBy,
});

export const RECEIVED_MOVIES = 'RECEIVED_MOVIES';

export const receivedMovies = (json) => ({
    type: RECEIVED_MOVIES,
    payload: json.data,
});

// Fetch movies

export const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = () => ({
    type: FETCH_MOVIES,
});

export function* fetchMoviesAsync() {
    const response = yield call(fetch, 'https://reactjs-cdp.herokuapp.com/movies');
    const movies = yield response.json();

    yield put(receivedMovies(movies));
}

export function* watchFetchFilms() {
    yield takeLatest(FETCH_MOVIES, fetchMoviesAsync);
}

// Search movies

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const searchMovies = (searchTerm, searchBy, sortBy) => ({
    type: SEARCH_MOVIES,
    searchTerm,
    searchBy,
    sortBy,
});

export function* searchMoviesAsync(action) {
    const params = `search=${action.searchTerm}&sortBy=${action.sortBy}&searchBy=${action.searchBy}`;
    const response = yield call(fetch, `${API_URL}?${params}`);
    const movies = yield response.json();

    yield put(receivedMovies(movies));
}

export function* watchSearchMovies() {
    yield takeLatest(SEARCH_MOVIES, searchMoviesAsync);
}

// View movie

export const RECEIVED_MOVIE_INFO = 'RECEIVED_MOVIE_INFO';
export const VIEW_MOVIE = 'VIEW_MOVIE';

export const receivedMovieInfo = (json) => ({
    type: RECEIVED_MOVIE_INFO,
    payload: json,
});

export const viewMovieById = (id) => ({
    type: VIEW_MOVIE,
    payload: id,
});

export function* viewMovieByIdAsync(action) {
    const response = yield call(fetch, `${API_URL}/${action.payload}`);
    const movie = yield response.json();

    const params = `search=${movie.genres[0]}&sortBy=release_date&searchBy=title`;
    const moviesByGenreResponse = yield call(fetch, `${API_URL}?${params}`);
    const moviesByGenre = yield moviesByGenreResponse.json();

    yield put(receivedMovieInfo(movie));
    yield put(receivedMovies(moviesByGenre));
}

export function* watchMovieById() {
    yield takeLatest(VIEW_MOVIE, viewMovieByIdAsync);
}

// All

export function* moviesSaga() {
    yield all([
        watchFetchFilms(),
        watchSearchMovies(),
        watchMovieById(),
    ]);
}
