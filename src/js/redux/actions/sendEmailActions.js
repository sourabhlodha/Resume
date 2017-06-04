import { actionTypes as types, urls } from '../constants';
import { post, get } from '../helpers';

export const signup = ({ email, password }) => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST });
  post({
    url: urls.SIGNUP,
    body: { email, password },
    success: types.SIGNUP_SUCCESS,
    failure: types.SIGNUP_FAILURE,
    dispatch,
  });
}


export const users = () => dispatch => {
  dispatch({ type: types.USERS_REQUEST });
  get({
    url: urls.USERS,
    success: types.USERS_SUCCESS,
    failure: types.USERS_FAILURE,
    dispatch,
  });
}

export const dismissError = () => (dispatch) => {
  const data = '';
  dispatch({ type: types.SERVICE_ERROR, data });
}
