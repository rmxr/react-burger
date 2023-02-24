import {
  ADD_INGREDIENT_TO_CONSTRUCTOR, CLEAR_CONSTRUCTOR,
  REARRANGE_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from "../actions/BurgerConstructor";

const initialState = {
  bun: {},
  stuffing: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_CONSTRUCTOR: {
      if (action.item.type === "bun") {
        return {...state, bun: action.item}
      } else {
        return {...state, stuffing: [...state.stuffing, {...action.item, constructorIndex: action.constructorIndex}]}
      }
    }
    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
      return {...state, stuffing: [...state.stuffing].filter(item => item.constructorIndex !== action.constructorIndex)}
    }
    case REARRANGE_CONSTRUCTOR: {
      // const {index, atIndex, stuffingItem} = action.payload;
      const stuffingCopy = [...state.stuffing];
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