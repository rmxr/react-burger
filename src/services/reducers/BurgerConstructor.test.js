import {burgerConstructorReducer as reducer} from "./BurgerConstructor";
import {
  ADD_INGREDIENT_TO_CONSTRUCTOR, CLEAR_CONSTRUCTOR,
  REARRANGE_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from "../actions/BurgerConstructor";

describe('burger constructor reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      bun: null,
      stuffing: null,
    })
  })

  it('should handle ADD_INGREDIENT_TO_CONSTRUCTOR with bun', () => {
    expect(reducer(undefined, {
      type: ADD_INGREDIENT_TO_CONSTRUCTOR,
      item: {
        _id: "60d3b41abdacab0026a733c7",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
      }
    })).toEqual({
      bun: {
        _id: "60d3b41abdacab0026a733c7",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
      },
      stuffing: null,
    })
  })

  it('should handle ADD_INGREDIENT_TO_CONSTRUCTOR with stuffing', () => {
    expect(reducer(undefined, {
      type: ADD_INGREDIENT_TO_CONSTRUCTOR,
      item: {
        "_id": "60d3b41abdacab0026a733cb",
        "name": "Биокотлета из марсианской Магнолии",
        "type": "main",
        "proteins": 420,
        "fat": 142,
        "carbohydrates": 242,
        "calories": 4242,
        "price": 424,
        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
        "__v": 0
      },
      constructorIndex: "c7161037-92a7-453d-b0f2-2439202d0f16",
    })).toEqual({
      bun: null,
      stuffing: [{
        "_id": "60d3b41abdacab0026a733cb",
        "name": "Биокотлета из марсианской Магнолии",
        "type": "main",
        "proteins": 420,
        "fat": 142,
        "carbohydrates": 242,
        "calories": 4242,
        "price": 424,
        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
        "__v": 0,
        "constructorIndex": "c7161037-92a7-453d-b0f2-2439202d0f16",
      }],
    })
  })

  it('should handle REMOVE_INGREDIENT_FROM_CONSTRUCTOR', () => {
    expect(reducer({
      bun: null,
      stuffing: [{
        "_id": "60d3b41abdacab0026a733cb",
        "name": "Биокотлета из марсианской Магнолии",
        "type": "main",
        "proteins": 420,
        "fat": 142,
        "carbohydrates": 242,
        "calories": 4242,
        "price": 424,
        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
        "__v": 0,
        "constructorIndex": "c7161037-92a7-453d-b0f2-2439202d0f16",
      }],
    }, {
      type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
      constructorIndex: "c7161037-92a7-453d-b0f2-2439202d0f16",
    })).toEqual({
      bun: null,
      stuffing: [],
    })
  })

  it('should handle REARRANGE_CONSTRUCTOR', () => {
    expect(reducer({
      "bun": {
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
      "stuffing": [
        {
          "_id": "60d3b41abdacab0026a733c8",
          "name": "Филе Люминесцентного тетраодонтимформа",
          "type": "main",
          "proteins": 44,
          "fat": 26,
          "carbohydrates": 85,
          "calories": 643,
          "price": 988,
          "image": "https://code.s3.yandex.net/react/code/meat-03.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
          "__v": 0,
          "constructorIndex": "63ec6784-12b6-4991-8600-cbf84b80ca44"
        },
        {
          "_id": "60d3b41abdacab0026a733c9",
          "name": "Мясо бессмертных моллюсков Protostomia",
          "type": "main",
          "proteins": 433,
          "fat": 244,
          "carbohydrates": 33,
          "calories": 420,
          "price": 1337,
          "image": "https://code.s3.yandex.net/react/code/meat-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
          "__v": 0,
          "constructorIndex": "2a989faf-648d-4696-9a45-6615a443c1bd"
        },
        {
          "_id": "60d3b41abdacab0026a733cb",
          "name": "Биокотлета из марсианской Магнолии",
          "type": "main",
          "proteins": 420,
          "fat": 142,
          "carbohydrates": 242,
          "calories": 4242,
          "price": 424,
          "image": "https://code.s3.yandex.net/react/code/meat-01.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
          "__v": 0,
          "constructorIndex": "11a2fa7a-49a7-4852-abe7-bf209c85c60b"
        }
      ]
    }, {
      "type": REARRANGE_CONSTRUCTOR,
      "index": 2,
      "atIndex": 1,
      "stuffingItem": {
        "_id": "60d3b41abdacab0026a733cb",
        "name": "Биокотлета из марсианской Магнолии",
        "type": "main",
        "proteins": 420,
        "fat": 142,
        "carbohydrates": 242,
        "calories": 4242,
        "price": 424,
        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
        "__v": 0,
        "constructorIndex": "11a2fa7a-49a7-4852-abe7-bf209c85c60b"
      }
    })).toEqual({
      "bun": {
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
      "stuffing": [
        {
          "_id": "60d3b41abdacab0026a733c8",
          "name": "Филе Люминесцентного тетраодонтимформа",
          "type": "main",
          "proteins": 44,
          "fat": 26,
          "carbohydrates": 85,
          "calories": 643,
          "price": 988,
          "image": "https://code.s3.yandex.net/react/code/meat-03.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
          "__v": 0,
          "constructorIndex": "63ec6784-12b6-4991-8600-cbf84b80ca44"
        },
        {
          "_id": "60d3b41abdacab0026a733cb",
          "name": "Биокотлета из марсианской Магнолии",
          "type": "main",
          "proteins": 420,
          "fat": 142,
          "carbohydrates": 242,
          "calories": 4242,
          "price": 424,
          "image": "https://code.s3.yandex.net/react/code/meat-01.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
          "__v": 0,
          "constructorIndex": "11a2fa7a-49a7-4852-abe7-bf209c85c60b"
        },
        {
          "_id": "60d3b41abdacab0026a733c9",
          "name": "Мясо бессмертных моллюсков Protostomia",
          "type": "main",
          "proteins": 433,
          "fat": 244,
          "carbohydrates": 33,
          "calories": 420,
          "price": 1337,
          "image": "https://code.s3.yandex.net/react/code/meat-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
          "__v": 0,
          "constructorIndex": "2a989faf-648d-4696-9a45-6615a443c1bd"
        }
      ]
    })
  })

  it("should handle CLEAR_CONSTRUCTOR", () => {
    expect(reducer({
      "bun": {
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
      "stuffing": [
        {
          "_id": "60d3b41abdacab0026a733c8",
          "name": "Филе Люминесцентного тетраодонтимформа",
          "type": "main",
          "proteins": 44,
          "fat": 26,
          "carbohydrates": 85,
          "calories": 643,
          "price": 988,
          "image": "https://code.s3.yandex.net/react/code/meat-03.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
          "__v": 0,
          "constructorIndex": "63ec6784-12b6-4991-8600-cbf84b80ca44"
        },
        {
          "_id": "60d3b41abdacab0026a733c9",
          "name": "Мясо бессмертных моллюсков Protostomia",
          "type": "main",
          "proteins": 433,
          "fat": 244,
          "carbohydrates": 33,
          "calories": 420,
          "price": 1337,
          "image": "https://code.s3.yandex.net/react/code/meat-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
          "__v": 0,
          "constructorIndex": "2a989faf-648d-4696-9a45-6615a443c1bd"
        },
        {
          "_id": "60d3b41abdacab0026a733cb",
          "name": "Биокотлета из марсианской Магнолии",
          "type": "main",
          "proteins": 420,
          "fat": 142,
          "carbohydrates": 242,
          "calories": 4242,
          "price": 424,
          "image": "https://code.s3.yandex.net/react/code/meat-01.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
          "__v": 0,
          "constructorIndex": "11a2fa7a-49a7-4852-abe7-bf209c85c60b"
        }
      ]
    }, {
      type: CLEAR_CONSTRUCTOR,
    })).toEqual({
      bun: null,
      stuffing: null,
    })
  })
})
