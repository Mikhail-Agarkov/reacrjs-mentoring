import {search} from "../util/apiCall";

export const RECEIVED_FILMS = 'RECEIVED_FILMS';
export const SEARCH_BY = 'SEARCH_BY';
export const SORT_BY = 'SORT_BY';

export const receivedFilms = (json) => ({
    type: RECEIVED_FILMS,
    payload: json.data
});

export const setSearchBy = (searchBy) => ({
    type: SEARCH_BY,
    payload: searchBy
});

export const setSortBy = (sortBy) => ({
    type: SORT_BY,
    payload: sortBy
});

export function fetchFilms(searchTerm, searchBy, sortBy) {
    return function (dispatch) {
        return search(searchTerm, searchBy, sortBy)
            .then((json) => {
                dispatch(receivedFilms(json))
            });
    }
}