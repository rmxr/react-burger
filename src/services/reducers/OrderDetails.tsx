import {POST_ORDER, POST_ORDER_FAILED, POST_ORDER_SUCCESS, TOrderDetailsActions} from "../actions/OrderDetails";

type TInitialState = {
  orderRequest: boolean;
  orderFailed: boolean;
  order: { name?: string; number?: number }
}

export const initialState = {
  orderRequest: false,
  orderFailed: false,
  order: {},
};

export const postOrderReducer = (state: TInitialState = initialState, action: TOrderDetailsActions) => {
  switch (action.type) {
    case POST_ORDER: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
        order: {},
      }
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderRequest: false,
        orderFailed: false,
      }
    }
    case POST_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      }
    }

    default: {
      return state;
    }
  }
}