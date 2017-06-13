import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store';
import routes from './routes';
import './styles/main.scss';


render(
    <Provider store={store}>
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('main')
);
