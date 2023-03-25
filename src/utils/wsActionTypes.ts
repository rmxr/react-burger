export const FEED_CONNECTION_START: 'FEED_CONNECTION_START' = 'FEED_CONNECTION_START';
export const ORDERS_CONNECTION_START: 'ORDERS_CONNECTION_START' = 'ORDERS_CONNECTION_START';
export const FEED_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const ORDERS_CONNECTION_SUCCESS: "ORDERS_CONNECTION_SUCCESS" = "ORDERS_CONNECTION_SUCCESS";
export const FEED_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const ORDERS_CONNECTION_ERROR: 'ORDERS_CONNECTION_ERROR' = 'ORDERS_CONNECTION_ERROR';
export const FEED_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const ORDERS_CONNECTION_CLOSED: 'ORDERS_CONNECTION_CLOSED' = 'ORDERS_CONNECTION_CLOSED';
export const FEED_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const ORDERS_GET_MESSAGE: 'ORDERS_GET_MESSAGE' = 'ORDERS_GET_MESSAGE';
export const FEED_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
export const WS_CONNECTION_END: "WS_CONNECTION_END" = "WS_CONNECTION_END";

export const feedWsActions = {
  start: FEED_CONNECTION_START,
  success: FEED_CONNECTION_SUCCESS,
  error: FEED_CONNECTION_ERROR,
  closed: FEED_CONNECTION_CLOSED,
  getMessage: FEED_GET_MESSAGE,
  sendMessage: FEED_SEND_MESSAGE,
}

export const ordersWsActions = {
  start: ORDERS_CONNECTION_START,
  success: ORDERS_CONNECTION_SUCCESS,
  error: ORDERS_CONNECTION_ERROR,
  closed: ORDERS_CONNECTION_CLOSED,
  getMessage: ORDERS_GET_MESSAGE,
  sendMessage: FEED_SEND_MESSAGE,
}

interface IWsConnectionEndAction {
  readonly type: typeof WS_CONNECTION_END;
}

interface IWsConnectionStartAction {
  readonly type: typeof FEED_CONNECTION_START | typeof ORDERS_CONNECTION_START;
  readonly payload: string;
}

interface IWsSendMessageAction {
  readonly type: typeof FEED_SEND_MESSAGE;
  readonly payload: string
}

interface IWsConnectionSuccessAction {
  readonly type: typeof FEED_CONNECTION_SUCCESS | typeof ORDERS_CONNECTION_SUCCESS;
  readonly payload?: Event;
}

interface IWsConnectionErrorAction {
  readonly type: typeof FEED_CONNECTION_ERROR | typeof ORDERS_CONNECTION_ERROR;
  readonly payload: Event;
}

interface IWsConnectionClosedAction {
  readonly type: typeof FEED_CONNECTION_CLOSED | typeof ORDERS_CONNECTION_CLOSED;
  readonly payload?: CloseEvent;
}

interface IWsGetMessageAction {
  readonly type: typeof FEED_GET_MESSAGE | typeof ORDERS_GET_MESSAGE;
  readonly payload: string;
}

export type TWSActions = IWsConnectionStartAction | IWsSendMessageAction | IWsConnectionEndAction |
  IWsConnectionSuccessAction
  | IWsConnectionErrorAction
  | IWsConnectionClosedAction
  | IWsGetMessageAction;