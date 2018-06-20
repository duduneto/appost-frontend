import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../features/home';

export default props => (
    <div>
        <Route path='/' component={Home} />
        <Redirect from='*' to='/' />
    </div>

)