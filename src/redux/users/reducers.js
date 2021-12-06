
import * as Action from './action'
import initialState from "../store/initialState";

export const UsersReducers = (state = initialState.users, action) => {
  switch (action.type) {
    case Action.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}