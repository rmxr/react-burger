import {LOGIN, LOGOUT, SET_REDIRECT} from "../actions/Auth";

const initialState = {
  user: {
    email: "",
    name: "",
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: {email: action.email, name: action.name}
      }
    }
    case LOGOUT: {
      return initialState;
    }
    case SET_REDIRECT: {
      return {
        ...state,
        redirect: action.redirect,
      }
    }
    default: {
      return state;
    }
  }
}