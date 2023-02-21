import {ADD_INGREDIENT_TO_CONSTRUCTOR, REMOVE_INGREDIENT_FROM_CONSTRUCTOR} from "../actions/BurgerConstructor";
import {v4} from "uuid";

const initialState = {
  bun: {
    _id: '60d3b41abdacab0026a733c7',
    name: 'Флюоресцентная булка R2-D3',
    type: 'bun',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
    __v: 0
  },
  stuffing: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_CONSTRUCTOR: {
      if (action.item.type === "bun") {
        return {...state, bun: action.item}
      } else {
        return {...state, stuffing: [...state.stuffing, {...action.item, constructorIndex: v4()}]}
      }
    }
    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
      return {...state, stuffing: [...state.stuffing].filter(item => item.constructorIndex !== action.constructorIndex)}
    }
    default: {
      return state;
    }
  }
}