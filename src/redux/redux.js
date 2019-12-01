import { createStore, applyMiddleware } from 'redux'
import reducer from "./reducer";
import thunk from 'redux-thunk'

const initialState = {
    searchBy: 'title',
    sortBy: 'release_date'
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;