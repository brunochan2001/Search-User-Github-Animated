import * as types from '../../actionTypes';
import reducer from '../userReducers';
import { user, users } from './mockData';

const initialState = {
  loading: false,
  error: false,
  data: [],
  activeUser: {}
};

describe('User reducer', () => {
  test('should initialize with a default state', () => {
    const action = { type: undefined };
    const state = reducer(undefined, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.data).toHaveLength(0);
    expect(state.activeUser).toEqual({});
  });

  test('should search all users', () => {
    const actionUsersLoading = {
      type: types.GET_USERS_LOADING
    };
    const actionUsersSuccess = {
      type: types.GET_USERS_SUCCESS,
      payload: users
    };
    const stateBeforeAction = reducer(initialState, actionUsersLoading);
    const stateAfterAction = reducer(initialState, actionUsersSuccess);

    expect(stateBeforeAction.loading).toBe(true);
    expect(stateBeforeAction.data).toHaveLength(0);

    expect(stateAfterAction.data).toHaveLength(6);
    expect(stateAfterAction.loading).toBe(false);
  });

  test('should show error when search all users', () => {
    const error = 'Request failed with status code 403';
    const actionUsersLoading = {
      type: types.GET_USERS_LOADING
    };
    const actionUsersFail = {
      type: types.GET_USERS_FAIL,
      payload: error
    };
    const stateBeforeAction = reducer(initialState, actionUsersLoading);
    const stateAfterAction = reducer(initialState, actionUsersFail);

    expect(stateBeforeAction.loading).toBe(true);
    expect(stateBeforeAction.error).toEqual(null);

    expect(stateAfterAction.loading).toBe(false);
    expect(stateAfterAction.error).toEqual(error);
  });

  test('should search single users', () => {
    const actionUserLoading = {
      type: types.GET_SINGLE_USER_LOADING
    };
    const actionUserSuccess = {
      type: types.GET_SINGLE_USER_SUCCESS,
      payload: user
    };
    const stateBeforeAction = reducer(initialState, actionUserLoading);
    const stateAfterAction = reducer(initialState, actionUserSuccess);

    expect(stateBeforeAction.loading).toBe(true);
    expect(stateBeforeAction.activeUser).toEqual({});

    expect(stateAfterAction.loading).toBe(false);
    expect(stateAfterAction.activeUser).toEqual(user);
  });

  test('should show error when search single user', () => {
    const error = 'Request failed with status code 403';
    const actionUserLoading = {
      type: types.GET_SINGLE_USER_LOADING
    };
    const actionUserFail = {
      type: types.GET_SINGLE_USER_FAIL,
      payload: error
    };
    const stateBeforeAction = reducer(initialState, actionUserLoading);
    const stateAfterAction = reducer(initialState, actionUserFail);

    expect(stateBeforeAction.loading).toBe(true);
    expect(stateBeforeAction.error).toEqual(null);

    expect(stateAfterAction.loading).toBe(false);
    expect(stateAfterAction.error).toEqual(error);
  });
});
