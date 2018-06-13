import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { sagas } from './sagas';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

let middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

let middleware = applyMiddleware(...middlewares);

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    compose(
      middleware,
      applyMiddleware(routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  sagaMiddleware.run(sagas);

  return <Provider store={store}>{children}</Provider>;
};
