import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import marvelsReducer from './reducers/marvelReducer';

const reducer = combineReducers({
  marvelsReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, logger)),
);

export default store;
