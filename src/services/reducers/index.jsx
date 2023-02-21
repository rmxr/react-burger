import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./BurgerIngredients";
import {burgerConstructorReducer} from "./BurgerConstructor";

export const rootReducer = combineReducers({
    ingredients: burgerIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
});