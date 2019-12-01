const API_DOMAIN = 'https://reactjs-cdp.herokuapp.com';

export function search(searchTerm, searchBy, sortBy) {
    const params = searchTerm ? buildParams({
        'search': searchTerm,
        'searchBy': searchBy,
        'sortBy': sortBy
    }) : '';

    return call('/movies', params);
}

function call(api, params) {
    return fetch(`${API_DOMAIN}${api}?${params}`)
        .then(
            response => response.json(),
            error => console.log('Error fetching films from API', error)
        );
}

function buildParams(params) {
    const requestParams = [];
    for (let param in params) {
        requestParams.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]));
    }
    return requestParams.join('&');
}