import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./BurgerIngredients";
import {burgerConstructorReducer} from "./BurgerConstructor";
import {postOrderReducer} from "./OrderDetails";
import {authReducer} from "./Auth";
import {feedReducer} from "./feedReducer";

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: postOrderReducer,
  auth: authReducer,
  feed: feedReducer,
});