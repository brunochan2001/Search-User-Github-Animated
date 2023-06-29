import { AnyAction } from 'redux';
import { UsersState } from '../../lib/types';
import {
  GET_USERS_FAIL,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_SINGLE_USER_LOADING,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAIL,
  DISMMISS_USER
} from '../actionTypes';

const initialState: UsersState = {
  loading: false,
  error: false,
  data: [],
  activeUser: {}
};

const reducer = (state: UsersState = initialState, action: AnyAction) => {
  const { payload } = action;
  switch (action.type) {
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: true,
        data: []
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...payload]
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
        data: []
      };

    case GET_SINGLE_USER_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        activeUser: payload
      };

    case GET_SINGLE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
        activeUser: {}
      };

    case DISMMISS_USER:
      return {
        ...state,
        loading: false,
        activeUser: {},
        data: []
      };

    default:
      return state;
  }
};

export default reducer;
