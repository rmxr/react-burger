import {
  ADD_INGREDIENT_TO_CONSTRUCTOR, CLEAR_CONSTRUCTOR,
  REARRANGE_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR, TBurgerConstructorActions
} from "../actions/burgerConstructor";
import {TIngredient, TStuffing} from "../../utils/types";

type TInitialState = {
  bun: TIngredient | null;
  stuffing: TStuffing[] | null;
}

export const initialState = {
  bun: null,
  stuffing: null,
};

export const burgerConstructorReducer = (state: TInitialState = initialState, action: TBurgerConstructorActions) => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_CONSTRUCTOR: {
      if (action.item.type === "bun") {
        return {...state, bun: action.item}
      } else {
        return {
          ...state,
          stuffing: [...state.stuffing ?? [], {...action.item, constructorIndex: action.constructorIndex}]
        }
      }
    }
    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
      return {
        ...state,
        stuffing: [...state.stuffing!].filter(item => item.constructorIndex !== action.constructorIndex)
      }
    }
    case REARRANGE_CONSTRUCTOR: {
      const stuffingCopy = [...state.stuffing!];
      const stuffingItemToMove = stuffingCopy.splice(action.index, 1)[0];
      stuffingCopy.splice(action.atIndex, 0, {...stuffingItemToMove, ...action.stuffingItem});
      return {
        ...state,
        stuffing: stuffingCopy,
      }
    }
    case CLEAR_CONSTRUCTOR: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}