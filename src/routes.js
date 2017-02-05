import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ProgramBuilderPage from './containers/ProgramBuilderPage.js';
import App from './components/App.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProgramBuilderPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
