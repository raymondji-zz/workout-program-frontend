import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ProgramPage from './containers/ProgramPage.js';
import HomePage from './containers/HomePage.js';
import App from './components/App.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="program-page/:id" component={ProgramPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
