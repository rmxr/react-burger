import {LOGIN, LOGOUT, TAuthActions} from "../actions/Auth";

type TInitialState = {
  user: {
    email: string;
    name: string;
  }
}

const initialState = {
  user: {
    email: "",
    name: "",
  },
};

export const authReducer = (state: TInitialState = initialState, action: TAuthActions) => {
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
    default: {
      return state;
    }
  }
}