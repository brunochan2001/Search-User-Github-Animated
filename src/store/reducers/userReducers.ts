import { AnyAction } from 'redux';
import { UsersState } from '../../lib/types';
import {
  GET_USER_FAIL,
  GET_USER_LOADING,
  GET_USER_SUCCESS
} from '../actionTypes';

const initialState: UsersState = {
  loading: false,
  error: false,
  data: [],
  activeId: null
};

const reducer = (state: UsersState = initialState, action: AnyAction) => {
  const { payload } = action;
  switch (action.type) {
    case GET_USER_LOADING:
      return {
        ...state,
        loading: true,
        data: []
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...payload]
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
        data: []
      };

    default:
      return state;
  }
};

export default reducer;
