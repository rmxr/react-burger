import {makeRequest} from "../../utils/constants";

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";


export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS
    });
    makeRequest('ingredients').then(res => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data,
        })
      }
    )
      .catch(err => {
        console.error(err);
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
      })
  }
}