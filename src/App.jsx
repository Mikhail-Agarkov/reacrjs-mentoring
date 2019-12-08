import React from 'react';
import Home from "./views/Home/Home";
import {Provider} from 'react-redux'
import store from './redux/redux';
import {Route, Switch} from 'react-router-dom';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Footer from "./components/Footer/Footer";

export default class App extends React.PureComponent {

    render() {
        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/search' component={Home}/>
                    </Switch>
                    <Footer logo='Netflix Roulette'/>
                </Provider>
            </ErrorBoundary>
        );
    }

}