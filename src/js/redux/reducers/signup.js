import { actionTypes as types } from '../constants';

const initialState = {
  signup: '',
  fetching: false,
  fetched: false,
  err: ''
}

const signup = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {...state, fetching: true}
    case types.SIGNUP_SUCCESS:
      return {
          ...state,
          fetching: false,
          fetched: true,
          signup: action.data,
        }
    case types.SIGNUP_FAILURE:
      return {...state, fetching: false, err: action.data}
    default:
      return state
  }
}

export default signup;