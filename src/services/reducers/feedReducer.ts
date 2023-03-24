import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE, TWSActions
} from "../../utils/wsActionTypes";
import {type} from "os";

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

// Создадим редьюсер для WebSocket
export const feedReducer = (state = initialState, action: TWSActions) => {
  switch (action.type) {
    // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
    // Установим флаг wsConnected в состояние true
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    // Опишем обработку экшена с типом WS_CONNECTION_ERROR
    // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
    // Установим флаг wsConnected в состояние false
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    // Опишем обработку экшена с типом WS_GET_MESSAGE
    // Обработка происходит, когда с сервера возвращаются данные
    // В messages передадим данные, которые пришли с сервера
    case WS_GET_MESSAGE:
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