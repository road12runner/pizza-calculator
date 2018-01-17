import React from 'react';
import { render } from 'react-dom';
import {Provider}  from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reducer, {getInitialState} from './reducer';

import Application from './Application';

import './style.css';

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;


//const store = createStore(reducer, null, composeEnhancers(applyMiddleware(...middleware), ...enhancers));
const store = createStore(reducer, getInitialState(), composeEnhancers(applyMiddleware(...middleware), ...enhancers));

const app = (<Provider store={store}><Application/></Provider>);

render(app, document.getElementById('root'));
