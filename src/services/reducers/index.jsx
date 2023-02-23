import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./BurgerIngredients";
import {burgerConstructorReducer} from "./BurgerConstructor";
import {ingredientDetailsReducer} from "./IngredientDetails";
import {postOrderReducer} from "./OrderDetails";

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: postOrderReducer,
});