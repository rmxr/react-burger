import {burgerIngredientsReducer as reducer} from "./BurgerIngredients";
import {GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS} from "../actions/BurgerIngredients";

describe("burger ingredients reducer", () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      ingredientsRequest: false,
      ingredientsFailed: false,
      ingredients: [],
    })
  })

  it('should handle GET_INGREDIENTS', () => {
    expect(reducer({
      ingredientsRequest: false,
      ingredientsFailed: false,
      ingredients: [],
    }, {
      type: GET_INGREDIENTS,
    })).toEqual({
      ingredientsRequest: true,
      ingredientsFailed: false,
      ingredients: [],
    })
  })

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(reducer({
      "ingredientsRequest": true,
      "ingredientsFailed": false,
      "ingredients": []
    }, {
      "type": GET_INGREDIENTS_SUCCESS,
      "ingredients": [
        {
          "_id": "60d3b41abdacab0026a733c6",
          "name": "Краторная булка N-200i",
          "type": "bun",
          "proteins": 80,
          "fat": 24,
          "carbohydrates": 53,
          "calories": 420,
          "price": 1255,
          "image": "https://code.s3.yandex.net/react/code/bun-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
          "__v": 0
        },
        {
          "_id": "60d3b41abdacab0026a733c7",
          "name": "Флюоресцентная булка R2-D3",
          "type": "bun",
          "proteins": 44,
          "fat": 26,
          "carbohydrates": 85,
          "calories": 643,
          "price": 988,
          "image": "https://code.s3.yandex.net/react/code/bun-01.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
          "__v": 0
        },
      ]
    })).toEqual({
      "ingredientsRequest": false,
      "ingredientsFailed": false,
      "ingredients": [
        {
          "_id": "60d3b41abdacab0026a733c6",
          "name": "Краторная булка N-200i",
          "type": "bun",
          "proteins": 80,
          "fat": 24,
          "carbohydrates": 53,
          "calories": 420,
          "price": 1255,
          "image": "https://code.s3.yandex.net/react/code/bun-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
          "__v": 0
        },
        {
          "_id": "60d3b41abdacab0026a733c7",
          "name": "Флюоресцентная булка R2-D3",
          "type": "bun",
          "proteins": 44,
          "fat": 26,
          "carbohydrates": 85,
          "calories": 643,
          "price": 988,
          "image": "https://code.s3.yandex.net/react/code/bun-01.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
          "__v": 0
        },
      ]
    })
  })

  it('should handle GET_INGREDIENTS_FAILED', () => {
    expect(reducer({
      ingredientsRequest: false,
      ingredientsFailed: false,
      ingredients: [],
    }, {
      type: GET_INGREDIENTS_FAILED
    })).toEqual({
      ingredientsRequest: false,
      ingredientsFailed: true,
      ingredients: [],
    })
  })
})