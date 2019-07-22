import { createAction, handleActions } from 'redux-actions';

const USER_LOGIN="login/USER_LOGIN";
const IS_LOGGED_IN="login/IS_LOGGED_IN";
const USER_LOGOUT ="login/USER_LOGOUT";
export const userLogin = createAction(USER_LOGIN)
export const userLogout = createAction(USER_LOGOUT);
export const isLoggedIn = createAction(IS_LOGGED_IN);

const initialState = {
  isLoggedIn: false 
}

export default handleActions({
  [USER_LOGIN]: (state, actions) => ({
    isLoggedIn: true
  }),
  [USER_LOGOUT]: (state, action) => ({
    isLoggedIn: false
  })
}, initialState);

