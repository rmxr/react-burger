import {
  FEED_CONNECTION_SUCCESS,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_CLOSED,
  FEED_GET_MESSAGE, TWSActions
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
  total: number;
  totalToday: number;

  error?: Event;
}


const initialState: TWSState = {
  total: 0, totalToday: 0,
  wsConnected: false,
  orders: []
};


export const feedReducer = (state = initialState, action: TWSActions) => {
  switch (action.type) {

    case FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };


    case FEED_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };


    case FEED_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };


    case FEED_GET_MESSAGE:
      const parsedData = JSON.parse(action.payload)
      return {
        ...state,
        error: undefined,
        orders: parsedData.orders,
        total: parsedData.total,
        totalToday: parsedData.totalToday,
      };
    default:
      return state;
  }
};