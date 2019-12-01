import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Main from "./Main";

const mockStore = configureStore([]);

describe('Main', () => {

    let store = {};
    let component;

    beforeEach(() => {
        store = mockStore({
            sortBy: 'release_date'
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })
});