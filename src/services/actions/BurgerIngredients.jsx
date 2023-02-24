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
    fetch(serverUrl + "ingredients").then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
    }).then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data,
        });
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