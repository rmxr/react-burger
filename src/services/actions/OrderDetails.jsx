import {serverUrl} from "../../utils/constants";
import {GET_INGREDIENTS_FAILED} from "./BurgerIngredients";
import {CLEAR_CONSTRUCTOR} from "./BurgerConstructor";

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
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
    }).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_ORDER_SUCCESS,
          order: {name: res.name, number: res.order.number},
        })
        dispatch({
          type: CLEAR_CONSTRUCTOR
        })
      } else {
        dispatch({
          type: POST_ORDER_FAILED
        })
      }
    }).catch((err => {
      dispatch({
        type: POST_ORDER_FAILED
      })
    }))
  }
}