import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Footer from "./components/Footer/Footer";
import {hot} from 'react-hot-loader';
import Loadable from 'react-loadable';
import path from 'path';

const LoadableFilmView = Loadable({
    loader: () => import(/* webpackChunkName: "FilmView" */'./views/Film/Film'),
    loading() {
        return <div>Loading...</div>
    },
    delay: 200,
    serverSideRequirePath: path.join(__dirname, './views/Film/Film')
});

const App = ({Router, location, context, store}) => (
    <Router location={location} context={context}>
        <ErrorBoundary>
            <Provider store={store}>
                <Switch>
                    <Route exact path={['/', '/search']} component={Home}/>
                    <Route path='/film' component={LoadableFilmView}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
                <Footer logo='Netflix Roulette'/>
            </Provider>
        </ErrorBoundary>
    </Router>
);

export default hot(module)(App);
