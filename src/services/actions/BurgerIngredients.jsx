import {serverUrl} from "../../utils/constants";
import {ADD_INGREDIENT_TO_CONSTRUCTOR} from "./BurgerConstructor";

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";


export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS
    })
    fetch(serverUrl + "ingredients").then(res => res.json()).then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data,
        });
        dispatch({
          type: ADD_INGREDIENT_TO_CONSTRUCTOR,
          item: res.data[0]
        })
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
      }
    }).catch(err => {
      dispatch({
        type: GET_INGREDIENTS_FAILED
      })
    })
  }
}