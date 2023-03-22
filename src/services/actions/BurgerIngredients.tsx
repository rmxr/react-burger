import {makeRequest} from "../../utils/util";
import {Dispatch} from "redux";
import {TIngredient} from "../../utils/types";

export const GET_INGREDIENTS: 'GET_INGREDIENTS' = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" = "GET_INGREDIENTS_FAILED";

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS
  readonly ingredients: TIngredient[]
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED
}

export type TBurgerIngredientsActions =
  IGetIngredientsAction
  | IGetIngredientsFailedAction
  | IGetIngredientsSuccessAction;


export function getIngredients() {
  return function (dispatch: Dispatch) {
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