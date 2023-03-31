import type {Middleware, MiddlewareAPI} from 'redux';
import {AppDispatch, TRootState} from "../index";
import {
  TWSActions,
  FEED_CONNECTION_START,
  FEED_CONNECTION_SUCCESS,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_CLOSED,
  FEED_GET_MESSAGE,
  FEED_SEND_MESSAGE,
  ORDERS_CONNECTION_SUCCESS,
  ORDERS_CONNECTION_ERROR,
  ORDERS_CONNECTION_CLOSED,
  ORDERS_GET_MESSAGE,
  ORDERS_CONNECTION_START, FEED_CONNECTION_END, ORDERS_CONNECTION_END,
} from "./wsActionTypes";

type TTSActions = {
  start: typeof FEED_CONNECTION_START | typeof ORDERS_CONNECTION_START;
  end: typeof FEED_CONNECTION_END | typeof ORDERS_CONNECTION_END;
  success: typeof FEED_CONNECTION_SUCCESS | typeof ORDERS_CONNECTION_SUCCESS;
  error: typeof FEED_CONNECTION_ERROR | typeof ORDERS_CONNECTION_ERROR;
  closed: typeof FEED_CONNECTION_CLOSED | typeof ORDERS_CONNECTION_CLOSED;
  getMessage: typeof FEED_GET_MESSAGE | typeof ORDERS_GET_MESSAGE;
  sendMessage: typeof FEED_SEND_MESSAGE;
}

export const socketMiddleware = (wsActions: TTSActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TWSActions) => {
      const {dispatch, getState} = store;
      const {type, payload}: { type: string; payload?: string | Event } = action;

      if (action.type === wsActions.start) {
        socket = new WebSocket(action.payload);
      }

      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({type: wsActions.success, payload: event});
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({type: wsActions.error, payload: event});
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const {data} = event;
          dispatch({type: wsActions.getMessage, payload: data});
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({type: wsActions.closed, payload: event});
        };

        if (type === wsActions.sendMessage) {
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(payload));
        }

        if (type === wsActions.end) {
          // объект класса WebSocket
          socket.close();
        }
      }

      next(action);
    };
  }) as Middleware;
};