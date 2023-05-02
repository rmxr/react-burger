import {combineReducers} from "redux";
import {burgerIngredientsReducer} from "./burgerIngredients";
import {burgerConstructorReducer} from "./burgerConstructor";
import {postOrderReducer} from "./orderDetails";
import {authReducer} from "./auth";
import {feedReducer} from "./feedReducer";
import {profileOrdersReducer} from "./profileOrdersReducer";

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: postOrderReducer,
  auth: authReducer,
  feed: feedReducer,
  profileOrders: profileOrdersReducer,
});