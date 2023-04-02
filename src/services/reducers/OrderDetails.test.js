import {postOrderReducer as reducer} from "./OrderDetails";
import {POST_ORDER, POST_ORDER_FAILED, POST_ORDER_SUCCESS} from "../actions/OrderDetails";
import {initialState} from "./OrderDetails";

describe('postOrder reducer', () => {
  const postOrderState = {
    orderRequest: true,
    orderFailed: false,
    order: {},
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle POST_ORDER', () => {
    expect(reducer(initialState, {
      type: POST_ORDER
    })).toEqual(postOrderState)
  })

  it('should handle POST_ORDER_SUCCESS', () => {
    expect(reducer(postOrderState, {
      "type": POST_ORDER_SUCCESS,
      "order": {
        "name": "Фалленианский флюоресцентный минеральный space альфа-сахаридный бургер",
        "number": 47034
      }
    })).toEqual({
      ...initialState, "order": {
        "name": "Фалленианский флюоресцентный минеральный space альфа-сахаридный бургер",
        "number": 47034
      }
    })
  })

  it('should handle POST_ORDER_FAILED', () => {
    expect(reducer(postOrderState, {
      type: POST_ORDER_FAILED
    })).toEqual({
      orderRequest: false,
      orderFailed: true,
      order: {},
    })
  })
})