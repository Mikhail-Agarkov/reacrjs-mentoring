import React from 'react';
import Home from "./views/Home/Home";
import { Provider } from 'react-redux'
import store from './redux/redux';

export default class App extends React.PureComponent {

    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }

}