import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../storeConfig';
import * as endpoints from '../endpoints';
import {
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_SINGLE_USER_LOADING,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAIL,
  DISMMISS_USER,
  DISMISS_USERS_LIST
} from '../actionTypes';

export const getUsers =
  (value: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    dispatch({ type: GET_USERS_LOADING });
    try {
      const response = await axios.get(
        `${endpoints.getUsers}/search/users?per_page=100&q=${value}`
      );
      const { data } = response;
      const { items } = data;
      dispatch({ type: GET_USERS_SUCCESS, payload: items });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: GET_USERS_FAIL, payload: error.message });
      }
    }
  };

export const dismissUsersList =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    dispatch({ type: DISMISS_USERS_LIST });
  };

export const viewUser =
  (username: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    dispatch({ type: GET_SINGLE_USER_LOADING });
    try {
      const response = await axios.get(
        `${endpoints.getUsers}/users/${username}`
      );
      if (response) {
        const { data } = response;
        dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: data });
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: GET_SINGLE_USER_FAIL, payload: error.message });
      }
    }
  };

export const dismmissUser =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    dispatch({ type: DISMMISS_USER });
  };
