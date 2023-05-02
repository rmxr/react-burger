import {authReducer as reducer} from "./auth";
import {LOGIN, LOGOUT} from "../actions/auth";
import {initialState} from "./auth";

describe('auth reducer', () => {
  const loggedInState = {
    "user": {
      "email": "rmxr@yandex.ru",
      "name": "Антошка"
    }
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('should handle LOGIN', () => {
    expect(reducer(initialState, {
      "type": LOGIN,
      "email": "rmxr@yandex.ru",
      "name": "Антошка"
    })).toEqual(loggedInState)
  })
  it('should handle LOGOUT', () => {
    expect(reducer(loggedInState, {
      type: LOGOUT
    })).toEqual(initialState)
  })
})