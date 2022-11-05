import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../storeConfig';
import * as endpoints from '../endpoints';
import {
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  VIEW_USER,
  DISMISS_USER
} from '../actionTypes';

export const getUsers =
  (value: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    try {
      dispatch({ type: GET_USER_LOADING });
      const response = await axios.get(`${endpoints.getUsers}&q=${value}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`
        }
      });
      const { data } = response;
      const { items } = data;
      dispatch({ type: GET_USER_SUCCESS, payload: items });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_USER_FAIL, payload: { error } });
    }
  };

export const viewUser =
  (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  dispatch => {
    dispatch({ type: VIEW_USER, payload: { id } });
  };

export const dismmissUser =
  (): ThunkAction<void, RootState, unknown, AnyAction> => dispatch => {
    dispatch({ type: DISMISS_USER });
  };
