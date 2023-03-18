import {makeRequest} from "../../utils/util";
import {CLEAR_CONSTRUCTOR} from "./BurgerConstructor";
import {Dispatch} from "redux";

export const POST_ORDER = 'POST_ORDER';
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";

export function postOrder(ingredients: string[], authToken: string) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: POST_ORDER
    });
    makeRequest('orders', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({
        ingredients: ingredients
      })
    }).then(res => {
      dispatch({
        type: POST_ORDER_SUCCESS,
        order: {name: res.name, number: res.order?.number},
      })
      dispatch({
        type: CLEAR_CONSTRUCTOR
      })
    })
      .catch((err => {
        console.error(err);
        dispatch({
          type: POST_ORDER_FAILED
        })
      }))
  }
}