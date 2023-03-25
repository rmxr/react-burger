import {
  ORDERS_CONNECTION_CLOSED,
  ORDERS_CONNECTION_ERROR,
  ORDERS_CONNECTION_SUCCESS,
  ORDERS_GET_MESSAGE,
  TWSActions
} from "../../utils/wsActionTypes";


export type TOrder = {
  "_id": string;
  "ingredients": string[];
  "status": "done" | "pending";
  "name": string;
  "createdAt": string;
  "updatedAt": string;
  "number": number;
}

type TWSState = {
  wsConnected: boolean;
  orders: TOrder[];
  error?: Event;
}


const initialState: TWSState = {
  wsConnected: false,
  orders: []
};

export const profileOrdersReducer = (state = initialState, action: TWSActions) => {
  switch (action.type) {

    case ORDERS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };
    case ORDERS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case ORDERS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case ORDERS_GET_MESSAGE:
      const parsedData = JSON.parse(action.payload)
      return {
        ...state,
        error: undefined,
        orders: parsedData.orders,
      };
    default:
      return state;
  }
};