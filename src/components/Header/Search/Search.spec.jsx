import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Search from "./Search";

const mockStore = configureStore([]);

describe('Search', () => {

    let store = {};
    let component;

    beforeEach(() => {
        store = mockStore({
            searchBy: 'title',
            sortBy: 'release_date'
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <Search title='Find your movie' placeholder='Search' button='Search'/>
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            component.root.findAllByType('button')[1].props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            component.root.findAllByType('button')[2].props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});