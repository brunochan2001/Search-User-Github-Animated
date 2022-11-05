import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { userReducers } from './reducers';
import thunkMiddleware from 'redux-thunk';

const middleware = [thunkMiddleware];

const reducer = combineReducers({
  users: userReducers
});

const store = createStore(reducer, applyMiddleware(...middleware));
store.subscribe(() => '');

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export default store;
