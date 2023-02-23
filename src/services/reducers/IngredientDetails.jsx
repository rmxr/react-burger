import {REMOVE_INGREDIENT_DETAILS_ELEMENT, SET_INGREDIENT_DETAILS_ELEMENT} from "../actions/IngredientDetails";

const initialState = {};
export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS_ELEMENT: {
      return {...action.element}
    }
    case REMOVE_INGREDIENT_DETAILS_ELEMENT: {
      return {}
    }
    default: {
      return state;
    }
  }
}