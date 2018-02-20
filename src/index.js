import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import store, { history } from './store';
import AppContainer from './components/App/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={AppContainer} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
