import { actionTypes as types } from '../constants';

const initialState = {
  users: '',
  fetching: false,
  fetched: false,
  err: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.USERS_REQUEST:
      return {...state, fetching: true}
    case types.USERS_SUCCESS:
      return {
          ...state,
          fetching: false,
          fetched: true,
          users: action.data,
        }
    case types.USERS_FAILURE:
      return {...state, fetching: false, err: action.data}
    default:
      return state
  }
}

export default user;