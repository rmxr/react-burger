import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./BurgerIngredients";

export const rootReducer = combineReducers({
    ingredients: burgerIngredientsReducer,
});