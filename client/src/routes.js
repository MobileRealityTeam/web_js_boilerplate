import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './views/Index';

export default (
    <Route path="/">
        <IndexRoute component={Index} />
    </Route>
);
