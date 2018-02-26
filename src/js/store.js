import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import common from './reducers/common'
import gameplayReducer from './reducers/gameplay'

import _middleware from './middleware'

const reducer = combineReducers({
  common,
  gameplayReducer,
})

const middleware = applyMiddleware(
  _middleware.boardCheck,
  _middleware.dropCounterMiddleware,
)

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(middleware),
)

export default store
