import {authReducer as reducer} from "./Auth";
import {LOGIN, LOGOUT} from "../actions/Auth";

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      user: {
        email: "",
        name: "",
      },
    })
  })
  it('should handle LOGIN', () => {
    expect(reducer({
      user: {
        email: "",
        name: "",
      },
    }, {
      "type": LOGIN,
      "email": "rmxr@yandex.ru",
      "name": "Антошка"
    })).toEqual({
      "user": {
        "email": "rmxr@yandex.ru",
        "name": "Антошка"
      }
    })
  })
  it('should handle LOGOUT', () => {
    expect(reducer({
      "user": {
        "email": "rmxr@yandex.ru",
        "name": "Антошка"
      }
    }, {
      type: LOGOUT
    })).toEqual({
      user: {
        email: "",
        name: "",
      },
    })
  })
})