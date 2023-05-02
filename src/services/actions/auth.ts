import {makeRequest, setCookie} from "../../utils/util";
import {Dispatch} from "redux";
import {AppDispatch} from "../../index";
import {AppThunk} from "../../utils/types";

export const LOGIN: 'LOGIN' = 'LOGIN';
export const LOGOUT: 'LOGOUT' = 'LOGOUT';

export interface IAuthLoginAction {
  readonly type: typeof LOGIN;
  readonly email: string;
  readonly name: string;
}

export interface IAuthLogoutAction {
  readonly type: typeof LOGOUT;
}

export type TAuthActions = IAuthLoginAction | IAuthLogoutAction;

export const register = (email: string, password: string, name: string) => {
  return makeRequest('auth/register', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": name
    })
  })
}

export const login: AppThunk = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    return makeRequest(`auth/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      })
    }).then(res => {
      dispatch({
        type: LOGIN,
        email: res.user!.email,
        name: res.user!.name
      })
      const authToken = res.accessToken.split('Bearer ')[1];
      const expiry = new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10);
      setCookie("token", authToken, {expires: 1200});
      setCookie('refreshToken', res.refreshToken, {expires: expiry});
    }).catch(console.error)
  }
}

export const accessUserData: AppThunk = (method: string, token: string, body?: { [key: string]: string }) => {
  return function (dispatch: Dispatch) {
    return makeRequest('auth/user', {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    }).then((res) => {
      dispatch({
        type: LOGIN,
        email: res.user!.email,
        name: res.user!.name
      })
    }).catch(console.error)
  }
}

export function requestPasswordReset(email: string) {
  return makeRequest("password-reset", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "email": email
    })
  })
}

export function resetPassword(password: string, token: string) {
  return makeRequest('password-reset/reset', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "password": password,
      "token": token,
    })
  })
}