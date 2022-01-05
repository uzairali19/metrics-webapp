import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import marvelsReducer from './reducers/marvelReducer';

const reducer = combineReducers({
  marvelsReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));

export default store;
