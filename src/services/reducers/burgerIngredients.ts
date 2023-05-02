import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  TBurgerIngredientsActions
} from "../actions/burgerIngredients";
import {TIngredient} from "../../utils/types";

type TInitialState = {
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  ingredients: TIngredient[],
}

export const initialState = {
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredients: [],
};

export const burgerIngredientsReducer = (state: TInitialState = initialState, action: TBurgerIngredientsActions) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsFailed: false,
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      }
    }

    default: {
      return state;
    }
  }
};