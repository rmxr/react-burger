import PropTypes from "prop-types";


export const serverUrl = "https://norma.nomoreparties.space/api/";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`)
};

const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(`Ответ не success: ${res}`)
};

export const makeRequest = (endpoint, options) => {
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
};

export function getUserInfo() {

};

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
    .catch(err => console.error(err))
};

export function getCookie(name) {

  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

// уcтанавливает cookie
export function setCookie(name, value, props) {

  props = props || {}

  var exp = props.expires

  if (typeof exp == "number" && exp) {

    var d = new Date()

    d.setTime(d.getTime() + exp * 1000)

    exp = props.expires = d

  }

  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString()
  }

  value = encodeURIComponent(value)

  var updatedCookie = name + "=" + value

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
export function deleteCookie(name) {

  setCookie(name, null, {expires: -1})

}


export const ingredientsPropType = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
});