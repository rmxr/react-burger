import {serverUrl, setCookie} from "../../utils/constants";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_REDIRECT = 'SET_REDIRECT';

export function login(email, password) {
  return function (dispatch) {
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
};

export function accessUserData(method, token, body) {
  return function (dispatch) {
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
};