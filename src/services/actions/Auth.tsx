import {makeRequest, serverUrl, setCookie} from "../../utils/util";
import {Dispatch} from "redux";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_REDIRECT = 'SET_REDIRECT';

export function login(email: string, password: string) {
  return function (dispatch: Dispatch) {
    return fetch(`${serverUrl}auth/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      })
    }).then(res => res.json())
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: LOGIN,
            email: res.user.email,
            name: res.user.name
          });
          const authToken = res.accessToken.split('Bearer ')[1];
          const expiry = new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10);
          setCookie("token", authToken, {expires: 1200});
          setCookie('refreshToken', res.refreshToken, {expires: expiry});
          return Promise.resolve();
        } else {
          return Promise.reject("Неверные данные");
        }
      })
  }
}

export function accessUserData(method: string, token: string, body?: { [key: string]: string }) {
  return function (dispatch: Dispatch) {
    return fetch(`${serverUrl}auth/user`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: LOGIN,
            email: res.user.email,
            name: res.user.name
          })
        }
      });
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