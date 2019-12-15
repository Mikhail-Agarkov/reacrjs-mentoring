import React from 'react';
import { hydrate } from 'react-dom';
import App from '../App';
import {BrowserRouter} from 'react-router-dom';
import configureStore from '../redux/store';
import '../global.scss';

const store = configureStore(window.PRE_LOADED_STATE);

hydrate(<App Router={BrowserRouter} store={store}/>, document.getElementById('root'));
