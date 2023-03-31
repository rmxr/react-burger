import {postOrderReducer as reducer} from "./OrderDetails";
import {POST_ORDER, POST_ORDER_FAILED, POST_ORDER_SUCCESS} from "../actions/OrderDetails";

describe('postOrder reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      orderRequest: false,
      orderFailed: false,
      order: {},
    })
  })

  it('should handle POST_ORDER', () => {
    expect(reducer({
      orderRequest: false,
      orderFailed: false,
      order: {},
    }, {
      type: POST_ORDER
    })).toEqual({
      orderRequest: true,
      orderFailed: false,
      order: {},
    })
  })

  it('should handle POST_ORDER_SUCCESS', () => {
    expect(reducer({
      orderRequest: true,
      orderFailed: false,
      order: {},
    }, {
      "type": POST_ORDER_SUCCESS,
      "order": {
        "name": "Фалленианский флюоресцентный минеральный space альфа-сахаридный бургер",
        "number": 47034
      }
    })).toEqual({
      "orderRequest": false,
      "orderFailed": false,
      "order": {
        "name": "Фалленианский флюоресцентный минеральный space альфа-сахаридный бургер",
        "number": 47034
      }
    })
  })

  it('should handle POST_ORDER_FAILED', () => {
    expect(reducer({
      orderRequest: true,
      orderFailed: false,
      order: {},
    }, {
      type: POST_ORDER_FAILED
    })).toEqual({
      orderRequest: false,
      orderFailed: true,
      order: {},
    })
  })
})