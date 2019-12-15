import React from 'react';
import { hydrate } from 'react-dom';
import App from '../App';
import {BrowserRouter} from 'react-router-dom';
import '../global.scss';

hydrate(<App Router={BrowserRouter}/>, document.getElementById('root'));
