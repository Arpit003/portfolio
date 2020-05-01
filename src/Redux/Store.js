import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import reducers from './Reducers'

const env = process.env.REACT_APP_ENV;
const middlewares = []
const composeEnhancers =
  env !== "prod" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
      })
    : compose;

const store = createStore(
  combineReducers({
  ...reducers
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);

export { store }
