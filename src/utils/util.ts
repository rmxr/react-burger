import {TIngredient} from "./types";

export const serverUrl = "https://norma.nomoreparties.space/api/";

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`)
};
const checkSuccess = (res: Response & { success: boolean; accessToken: string; refreshToken: string; name?: string; order?: { number: number }; data?: TIngredient[] }) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(`Ответ не success: ${res}`)
};

export const makeRequest = (endpoint: string, options?: object) => {
  return fetch(`${serverUrl}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};

export function updateToken() {
  const refreshToken = getCookie("refreshToken");
  return makeRequest('auth/token', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "token": refreshToken
    })
  }).then(res => {
    const authToken = res.accessToken.split('Bearer ')[1];
    const expiry = new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10);
    setCookie("token", authToken, {expires: 1200});
    setCookie('refreshToken', res.refreshToken, {expires: expiry});
  }).catch(err => console.error(err))
}

export function logout() {
  const refreshToken = getCookie("refreshToken");
  makeRequest('auth/logout', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "token": refreshToken
    })
  }).then(() => {
    deleteCookie('token');
    deleteCookie('refreshToken');
  })
}

export function getCookie(name: string) {

  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

// уcтанавливает cookie
export function setCookie(name: string, value: string | number | boolean | null, props: { [key: string]: Date | number | string | boolean }) {

  props = props || {}

  var exp = props.expires

  if (typeof exp == "number" && exp) {

    var d = new Date()

    d.setTime(d.getTime() + exp * 1000)

    exp = props.expires = d

  }

  if (exp && exp instanceof Date) {
    props.expires = exp.toUTCString()
  }

  value = encodeURIComponent(value!)

  let updatedCookie = name + "=" + value;

  for (var propName in props) {

    updatedCookie += "; " + propName

    var propValue = props[propName]

    if (propValue !== true) {
      updatedCookie += "=" + propValue
    }
  }

  document.cookie = updatedCookie

}

// удаляет cookie
export function deleteCookie(name: string) {

  setCookie(name, null, {expires: -1})

}
