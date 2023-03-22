import {TIngredient, TStuffing} from "../../utils/types";

export const ADD_INGREDIENT_TO_CONSTRUCTOR: 'ADD_INGREDIENT_TO_CONSTRUCTOR' = 'ADD_INGREDIENT_TO_CONSTRUCTOR';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR: 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR' = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const REARRANGE_CONSTRUCTOR: 'REARRANGE_CONSTRUCTOR' = 'REARRANGE_CONSTRUCTOR';
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = 'CLEAR_CONSTRUCTOR';

export interface IAddIngredientToConstructorAction {
  readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR;
  readonly item: TIngredient | TStuffing;
  readonly constructorIndex: string;

}

export interface IRemoveIngredientFromConstructorAction {
  readonly type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
  readonly constructorIndex: string;
}

export interface IRearrangeConstructorAction {
  readonly type: typeof REARRANGE_CONSTRUCTOR;
  readonly index: number;
  readonly atIndex: number;
  readonly stuffingItem: TStuffing,
}

export interface IClearConstructorAction {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TBurgerConstructorActions =
  IAddIngredientToConstructorAction
  | IRemoveIngredientFromConstructorAction
  | IRearrangeConstructorAction
  | IClearConstructorAction;
