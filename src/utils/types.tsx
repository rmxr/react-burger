import {TAuthActions} from "../services/actions/Auth";
import {TBurgerConstructorActions} from "../services/actions/BurgerConstructor";
import {TBurgerIngredientsActions} from "../services/actions/BurgerIngredients";
import {TOrderDetailsActions} from "../services/actions/OrderDetails";
import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {TRootState} from "../index";

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
  | TOrderDetailsActions;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, TRootState, never, TApplicationActions>
>;
