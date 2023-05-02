import {TAuthActions} from "../services/actions/auth";
import {TBurgerConstructorActions} from "../services/actions/burgerConstructor";
import {TBurgerIngredientsActions} from "../services/actions/burgerIngredients";
import {TOrderDetailsActions} from "../services/actions/orderDetails";
import {ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {TRootState} from "../index";
import {TWSActions} from "./wsActionTypes";

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TStuffing = TIngredient & { constructorIndex: string };
export type TApplicationActions =
  TAuthActions
  | TBurgerConstructorActions
  | TBurgerIngredientsActions
  | TOrderDetailsActions | TWSActions;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, TRootState, never, TApplicationActions>
>;
