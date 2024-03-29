import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { reducer as userReducers } from './reducers';

const middleware = [thunkMiddleware];

const reducer = combineReducers({
  users: userReducers
});

const store = createStore(reducer, applyMiddleware(...middleware));
store.subscribe(() => '');

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export default store;
