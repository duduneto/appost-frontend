import React, { Component } from 'react';
import LoginOrDefault from './layout/loginOrDefault';
import './App.css';

import { Route, BrowserRouter, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
            <div>
              <BrowserRouter>
                <div>
                  <Route path="/" component={LoginOrDefault} />
                  <Redirect from='*' to='/' />
                </div>
              </BrowserRouter>
            </div>
    );
  }
}

export default App;
