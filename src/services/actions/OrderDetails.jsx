import {serverUrl} from "../../utils/constants";
import {GET_INGREDIENTS_FAILED} from "./BurgerIngredients";

export const POST_ORDER = 'POST_ORDER';
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";

export function postOrder(ingredients) {
  return function (dispatch) {
    dispatch({
      type: POST_ORDER
    })
    fetch(`${serverUrl}orders`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        ingredients: ingredients
      })
    }).then(res => res.json()).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_ORDER_SUCCESS,
          order: {name: res.name, number: res.order.number},
        })
      } else {
        dispatch({
          type: POST_ORDER_FAILED
        })
      }
    }).catch((err => {
      dispatch({
        type: GET_INGREDIENTS_FAILED
      })
    }))
  }
}