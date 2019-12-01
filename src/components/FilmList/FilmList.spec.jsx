import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import FilmList from "./FilmList";
import FilmCard from "./FilmCard/FilmCard";


const mockStore = configureStore([]);

describe('FilmCard', () => {

    it('should render with given state from Redux store', () => {
        const state = {
            films: [
                {
                    'poster_path': 'src/to/image',
                    'title': 'Film Title',
                    'release_date': '2019',
                    'genres': ['Fantasy'],
                    'id': '2516'
                },
                {
                    'poster_path': 'src/to/another/image',
                    'title': 'Another Film Title',
                    'release_date': '2020',
                    'genres': ['Comedy'],
                    'id': '6498'
                }
            ]
        };
        expect(mockComponent(state).toJSON()).toMatchSnapshot();
    });

    it('should render with undefined Films state from Redux store', () => {
        expect(mockComponent({}).toJSON()).toMatchSnapshot();
    });

    it('should render with empty Films state from Redux store', () => {
        expect(mockComponent({films:[]}).toJSON()).toMatchSnapshot();
    });

    function mockComponent(state) {
        const store = mockStore(state);
        return renderer.create(
            <Provider store={store}>
                <FilmList/>
            </Provider>
        );
    }
});