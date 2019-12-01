import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import StatusBar from './StatusBar';

const mockStore = configureStore([]);

describe('StatusBar', () => {

    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            sortBy: 'release_date'
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <StatusBar/>
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            component.root.findAllByType('button')[0].props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            component.root.findAllByType('button')[1].props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});