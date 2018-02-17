import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import store, { history } from './store';
import App from './components/App/App';
import LoginView from './components/LoginView/LoginView';
import Header from './components/Header/Header';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/login" component={LoginView} />
        </Switch>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
