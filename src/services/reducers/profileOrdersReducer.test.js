import {profileOrdersReducer as reducer} from "./profileOrdersReducer";
import {
  ORDERS_CONNECTION_CLOSED,
  ORDERS_CONNECTION_ERROR,
  ORDERS_CONNECTION_SUCCESS,
  ORDERS_GET_MESSAGE
} from "../../utils/wsActionTypes";


describe("orders reducer", () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      wsConnected: false,
      orders: []
    })
  })
  it('should handle ORDERS_CONNECTION_SUCCESS', () => {
    expect(reducer({
      total: 0, totalToday: 0,
      wsConnected: false,
      orders: []
    }, {
      "type": ORDERS_CONNECTION_SUCCESS,
      "payload": {
        "isTrusted": true
      }
    })).toEqual({
      total: 0, totalToday: 0,
      wsConnected: true,
      orders: []
    })
  })

  it('should handle ORDERS_CONNECTION_ERROR', () => {
    expect(reducer({
      total: 0, totalToday: 0,
      wsConnected: true,
      orders: []
    }, {
      type: ORDERS_CONNECTION_ERROR,
      payload: "error",
    })).toEqual({
      total: 0, totalToday: 0,
      wsConnected: false,
      error: "error",
      orders: []
    })
  })

  it('should handle ORDERS_CONNECTION_CLOSED', () => {
    expect(reducer({
      total: 0, totalToday: 0,
      wsConnected: true,
      orders: []
    }, {
      type: ORDERS_CONNECTION_CLOSED,
    })).toEqual({
      total: 0, totalToday: 0,
      wsConnected: false,
      orders: [],
      error: undefined,
    })
  })

  it('should handle ORDERS_GET_MESSAGE', () => {
    expect(reducer({
      wsConnected: true,
      orders: []
    }, {
      type: ORDERS_GET_MESSAGE,
      payload: "{\"success\":true,\"orders\":[{\"_id\":\"640e0278936b17001be687fd\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-12T16:48:56.312Z\",\"updatedAt\":\"2023-03-12T16:48:56.798Z\",\"number\":43518},{\"_id\":\"640e029d936b17001be687ff\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cc\"],\"status\":\"done\",\"name\":\"Spicy флюоресцентный бургер\",\"createdAt\":\"2023-03-12T16:49:33.415Z\",\"updatedAt\":\"2023-03-12T16:49:33.893Z\",\"number\":43519},{\"_id\":\"640e02b7936b17001be68800\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-12T16:49:59.979Z\",\"updatedAt\":\"2023-03-12T16:50:00.477Z\",\"number\":43520},{\"_id\":\"640e02cc936b17001be68802\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space краторный бургер\",\"createdAt\":\"2023-03-12T16:50:20.837Z\",\"updatedAt\":\"2023-03-12T16:50:21.313Z\",\"number\":43521},{\"_id\":\"640e030a936b17001be68805\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-12T16:51:22.997Z\",\"updatedAt\":\"2023-03-12T16:51:23.483Z\",\"number\":43523},{\"_id\":\"640e0320936b17001be68806\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cf\"],\"status\":\"done\",\"name\":\"Флюоресцентный антарианский бургер\",\"createdAt\":\"2023-03-12T16:51:44.140Z\",\"updatedAt\":\"2023-03-12T16:51:44.704Z\",\"number\":43524},{\"_id\":\"640e0339936b17001be6880a\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-12T16:52:09.776Z\",\"updatedAt\":\"2023-03-12T16:52:10.190Z\",\"number\":43525},{\"_id\":\"640e0479936b17001be6881f\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cc\"],\"status\":\"done\",\"name\":\"Space spicy флюоресцентный бургер\",\"createdAt\":\"2023-03-12T16:57:29.607Z\",\"updatedAt\":\"2023-03-12T16:57:30.040Z\",\"number\":43529},{\"_id\":\"640e0546936b17001be68831\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-12T17:00:54.301Z\",\"updatedAt\":\"2023-03-12T17:00:54.769Z\",\"number\":43530},{\"_id\":\"640e056f936b17001be68835\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cc\"],\"status\":\"done\",\"name\":\"Space spicy флюоресцентный бургер\",\"createdAt\":\"2023-03-12T17:01:35.382Z\",\"updatedAt\":\"2023-03-12T17:01:35.888Z\",\"number\":43531},{\"_id\":\"640e0599936b17001be6883a\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-12T17:02:17.374Z\",\"updatedAt\":\"2023-03-12T17:02:17.875Z\",\"number\":43532},{\"_id\":\"640e05c0936b17001be6883c\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cc\"],\"status\":\"done\",\"name\":\"Space spicy флюоресцентный бургер\",\"createdAt\":\"2023-03-12T17:02:56.691Z\",\"updatedAt\":\"2023-03-12T17:02:57.086Z\",\"number\":43533},{\"_id\":\"640e062e936b17001be68842\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cc\"],\"status\":\"done\",\"name\":\"Space spicy флюоресцентный бургер\",\"createdAt\":\"2023-03-12T17:04:46.910Z\",\"updatedAt\":\"2023-03-12T17:04:47.364Z\",\"number\":43534},{\"_id\":\"640e064a936b17001be68843\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-12T17:05:14.466Z\",\"updatedAt\":\"2023-03-12T17:05:14.939Z\",\"number\":43535},{\"_id\":\"640e07a6936b17001be6885b\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cc\"],\"status\":\"done\",\"name\":\"Space spicy флюоресцентный бургер\",\"createdAt\":\"2023-03-12T17:11:02.259Z\",\"updatedAt\":\"2023-03-12T17:11:02.704Z\",\"number\":43540},{\"_id\":\"640e07ba936b17001be6885c\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-12T17:11:22.396Z\",\"updatedAt\":\"2023-03-12T17:11:22.799Z\",\"number\":43541},{\"_id\":\"640f1e13936b17001be68ec1\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733ca\"],\"status\":\"done\",\"name\":\"Био-марсианский краторный метеоритный бургер\",\"createdAt\":\"2023-03-13T12:58:59.600Z\",\"updatedAt\":\"2023-03-13T12:58:59.967Z\",\"number\":43672},{\"_id\":\"640f1e45936b17001be68ec5\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733d1\"],\"status\":\"done\",\"name\":\"Spicy фалленианский краторный бургер\",\"createdAt\":\"2023-03-13T12:59:49.285Z\",\"updatedAt\":\"2023-03-13T12:59:49.716Z\",\"number\":43673},{\"_id\":\"6412f7f5936b17001be6a75f\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-16T11:05:25.472Z\",\"updatedAt\":\"2023-03-16T11:05:25.903Z\",\"number\":44204},{\"_id\":\"64140a78936b17001be6b2c9\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-17T06:36:40.728Z\",\"updatedAt\":\"2023-03-17T06:36:41.185Z\",\"number\":44437},{\"_id\":\"64157e7d936b17001be6c007\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-18T09:03:57.711Z\",\"updatedAt\":\"2023-03-18T09:03:58.144Z\",\"number\":44637},{\"_id\":\"64157e96936b17001be6c00a\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-18T09:04:22.928Z\",\"updatedAt\":\"2023-03-18T09:04:23.353Z\",\"number\":44638},{\"_id\":\"6419ce74936b17001be71799\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-21T15:34:12.176Z\",\"updatedAt\":\"2023-03-21T15:34:12.556Z\",\"number\":45170},{\"_id\":\"641aaa32936b17001be71dc0\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space краторный бургер\",\"createdAt\":\"2023-03-22T07:11:46.781Z\",\"updatedAt\":\"2023-03-22T07:11:47.279Z\",\"number\":45222},{\"_id\":\"641ac014936b17001be71e6b\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c8\"],\"status\":\"done\",\"name\":\"Люминесцентный spicy флюоресцентный бессмертный space антарианский бургер\",\"createdAt\":\"2023-03-22T08:45:08.835Z\",\"updatedAt\":\"2023-03-22T08:45:09.215Z\",\"number\":45240},{\"_id\":\"641b06f0936b17001be72100\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space краторный бургер\",\"createdAt\":\"2023-03-22T13:47:28.386Z\",\"updatedAt\":\"2023-03-22T13:47:28.788Z\",\"number\":45343},{\"_id\":\"641b0f40936b17001be72136\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-22T14:22:56.034Z\",\"updatedAt\":\"2023-03-22T14:22:56.475Z\",\"number\":45352},{\"_id\":\"641d7e9f936b17001be72bfd\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733c9\"],\"status\":\"done\",\"name\":\"Бессмертный флюоресцентный бургер\",\"createdAt\":\"2023-03-24T10:42:39.518Z\",\"updatedAt\":\"2023-03-24T10:42:40.062Z\",\"number\":45746},{\"_id\":\"641d8087936b17001be72c09\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-24T10:50:47.556Z\",\"updatedAt\":\"2023-03-24T10:50:48.080Z\",\"number\":45747},{\"_id\":\"641d80ae936b17001be72c0a\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733ca\"],\"status\":\"done\",\"name\":\"Био-марсианский флюоресцентный метеоритный бургер\",\"createdAt\":\"2023-03-24T10:51:26.506Z\",\"updatedAt\":\"2023-03-24T10:51:26.994Z\",\"number\":45748},{\"_id\":\"641da43e936b17001be72cb0\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733d0\",\"60d3b41abdacab0026a733d3\"],\"status\":\"done\",\"name\":\"Экзо-плантаго флюоресцентный минеральный space био-марсианский бургер\",\"createdAt\":\"2023-03-24T13:23:10.383Z\",\"updatedAt\":\"2023-03-24T13:23:10.811Z\",\"number\":45771},{\"_id\":\"641da7bc936b17001be72cd1\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733ca\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733cf\"],\"status\":\"done\",\"name\":\"Люминесцентный метеоритный краторный астероидный антарианский бургер\",\"createdAt\":\"2023-03-24T13:38:04.631Z\",\"updatedAt\":\"2023-03-24T13:38:05.070Z\",\"number\":45784},{\"_id\":\"641dca05936b17001be72d43\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733ce\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733ca\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733d0\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733d2\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733d4\"],\"status\":\"done\",\"name\":\"Люминесцентный фалленианский антарианский экзо-плантаго spicy флюоресцентный минеральный астероидный бессмертный space альфа-сахаридный метеоритный био-марсианский традиционный-галактический бургер\",\"createdAt\":\"2023-03-24T16:04:21.542Z\",\"updatedAt\":\"2023-03-24T16:04:21.958Z\",\"number\":45797},{\"_id\":\"641dcad6936b17001be72d44\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733d2\"],\"status\":\"done\",\"name\":\"Астероидный экзо-плантаго альфа-сахаридный краторный бургер\",\"createdAt\":\"2023-03-24T16:07:50.176Z\",\"updatedAt\":\"2023-03-24T16:07:50.680Z\",\"number\":45798},{\"_id\":\"641de352936b17001be72dc0\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733ca\"],\"status\":\"done\",\"name\":\"Люминесцентный краторный бессмертный space метеоритный био-марсианский бургер\",\"createdAt\":\"2023-03-24T17:52:18.717Z\",\"updatedAt\":\"2023-03-24T17:52:19.177Z\",\"number\":45806},{\"_id\":\"641de381936b17001be72dc1\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733ca\",\"60d3b41abdacab0026a733d0\"],\"status\":\"done\",\"name\":\"Люминесцентный флюоресцентный минеральный бессмертный space метеоритный био-марсианский бургер\",\"createdAt\":\"2023-03-24T17:53:05.423Z\",\"updatedAt\":\"2023-03-24T17:53:05.807Z\",\"number\":45807},{\"_id\":\"641eebe6936b17001be735a7\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733ce\",\"60d3b41abdacab0026a733ca\",\"60d3b41abdacab0026a733d0\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733d4\"],\"status\":\"done\",\"name\":\"Люминесцентный экзо-плантаго флюоресцентный минеральный астероидный бессмертный space метеоритный традиционный-галактический бургер\",\"createdAt\":\"2023-03-25T12:41:10.333Z\",\"updatedAt\":\"2023-03-25T12:41:10.840Z\",\"number\":45872},{\"_id\":\"641eec15936b17001be735a8\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733d0\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733d2\"],\"status\":\"done\",\"name\":\"Экзо-плантаго альфа-сахаридный минеральный краторный бургер\",\"createdAt\":\"2023-03-25T12:41:57.542Z\",\"updatedAt\":\"2023-03-25T12:41:58.076Z\",\"number\":45873},{\"_id\":\"641f448d936b17001be73730\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-25T18:59:25.825Z\",\"updatedAt\":\"2023-03-25T18:59:26.250Z\",\"number\":45924},{\"_id\":\"641f5c5d936b17001be7377e\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733d4\"],\"status\":\"done\",\"name\":\"Био-марсианский астероидный экзо-плантаго флюоресцентный бургер\",\"createdAt\":\"2023-03-25T20:41:01.724Z\",\"updatedAt\":\"2023-03-25T20:41:02.150Z\",\"number\":45936},{\"_id\":\"641ffe8e0905fd001b6233bc\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733d4\"],\"status\":\"done\",\"name\":\"Астероидный экзо-плантаго краторный бургер\",\"createdAt\":\"2023-03-26T08:13:02.853Z\",\"updatedAt\":\"2023-03-26T08:13:03.392Z\",\"number\":45998},{\"_id\":\"6420001a0905fd001b6233bd\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733ce\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733d0\",\"60d3b41abdacab0026a733d3\"],\"status\":\"done\",\"name\":\"Люминесцентный экзо-плантаго краторный минеральный традиционный-галактический бургер\",\"createdAt\":\"2023-03-26T08:19:38.158Z\",\"updatedAt\":\"2023-03-26T08:19:38.572Z\",\"number\":45999},{\"_id\":\"64242dad0905fd001b62454d\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733cb\"],\"status\":\"done\",\"name\":\"Био-марсианский бессмертный краторный антарианский бургер\",\"createdAt\":\"2023-03-29T12:23:09.985Z\",\"updatedAt\":\"2023-03-29T12:23:10.890Z\",\"number\":46619},{\"_id\":\"64267ff90905fd001b625321\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733cb\"],\"status\":\"done\",\"name\":\"Био-марсианский бессмертный люминесцентный флюоресцентный бургер\",\"createdAt\":\"2023-03-31T06:38:49.877Z\",\"updatedAt\":\"2023-03-31T06:38:50.308Z\",\"number\":46935},{\"_id\":\"6426d7b00905fd001b62576a\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733d0\",\"60d3b41abdacab0026a733d2\"],\"status\":\"done\",\"name\":\"Фалленианский флюоресцентный минеральный space альфа-сахаридный бургер\",\"createdAt\":\"2023-03-31T12:53:04.046Z\",\"updatedAt\":\"2023-03-31T12:53:04.687Z\",\"number\":47034},{\"_id\":\"6426d8010905fd001b625775\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733ce\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733ca\"],\"status\":\"done\",\"name\":\"Люминесцентный метеоритный краторный антарианский традиционный-галактический бургер\",\"createdAt\":\"2023-03-31T12:54:25.172Z\",\"updatedAt\":\"2023-03-31T12:54:25.722Z\",\"number\":47035},{\"_id\":\"642705b60905fd001b625907\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733c9\"],\"status\":\"done\",\"name\":\"Фалленианский spicy флюоресцентный бессмертный био-марсианский бургер\",\"createdAt\":\"2023-03-31T16:09:26.625Z\",\"updatedAt\":\"2023-03-31T16:09:27.200Z\",\"number\":47091}],\"total\":47012,\"totalToday\":199}"
    })).toEqual({
      "wsConnected": true,
      "orders": [
        {
          "_id": "640e0278936b17001be687fd",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-12T16:48:56.312Z",
          "updatedAt": "2023-03-12T16:48:56.798Z",
          "number": 43518
        },
        {
          "_id": "640e029d936b17001be687ff",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cc"
          ],
          "status": "done",
          "name": "Spicy флюоресцентный бургер",
          "createdAt": "2023-03-12T16:49:33.415Z",
          "updatedAt": "2023-03-12T16:49:33.893Z",
          "number": 43519
        },
        {
          "_id": "640e02b7936b17001be68800",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-12T16:49:59.979Z",
          "updatedAt": "2023-03-12T16:50:00.477Z",
          "number": 43520
        },
        {
          "_id": "640e02cc936b17001be68802",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space краторный бургер",
          "createdAt": "2023-03-12T16:50:20.837Z",
          "updatedAt": "2023-03-12T16:50:21.313Z",
          "number": 43521
        },
        {
          "_id": "640e030a936b17001be68805",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-12T16:51:22.997Z",
          "updatedAt": "2023-03-12T16:51:23.483Z",
          "number": 43523
        },
        {
          "_id": "640e0320936b17001be68806",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cf"
          ],
          "status": "done",
          "name": "Флюоресцентный антарианский бургер",
          "createdAt": "2023-03-12T16:51:44.140Z",
          "updatedAt": "2023-03-12T16:51:44.704Z",
          "number": 43524
        },
        {
          "_id": "640e0339936b17001be6880a",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-12T16:52:09.776Z",
          "updatedAt": "2023-03-12T16:52:10.190Z",
          "number": 43525
        },
        {
          "_id": "640e0479936b17001be6881f",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cc"
          ],
          "status": "done",
          "name": "Space spicy флюоресцентный бургер",
          "createdAt": "2023-03-12T16:57:29.607Z",
          "updatedAt": "2023-03-12T16:57:30.040Z",
          "number": 43529
        },
        {
          "_id": "640e0546936b17001be68831",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-12T17:00:54.301Z",
          "updatedAt": "2023-03-12T17:00:54.769Z",
          "number": 43530
        },
        {
          "_id": "640e056f936b17001be68835",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cc"
          ],
          "status": "done",
          "name": "Space spicy флюоресцентный бургер",
          "createdAt": "2023-03-12T17:01:35.382Z",
          "updatedAt": "2023-03-12T17:01:35.888Z",
          "number": 43531
        },
        {
          "_id": "640e0599936b17001be6883a",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-12T17:02:17.374Z",
          "updatedAt": "2023-03-12T17:02:17.875Z",
          "number": 43532
        },
        {
          "_id": "640e05c0936b17001be6883c",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cc"
          ],
          "status": "done",
          "name": "Space spicy флюоресцентный бургер",
          "createdAt": "2023-03-12T17:02:56.691Z",
          "updatedAt": "2023-03-12T17:02:57.086Z",
          "number": 43533
        },
        {
          "_id": "640e062e936b17001be68842",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cc"
          ],
          "status": "done",
          "name": "Space spicy флюоресцентный бургер",
          "createdAt": "2023-03-12T17:04:46.910Z",
          "updatedAt": "2023-03-12T17:04:47.364Z",
          "number": 43534
        },
        {
          "_id": "640e064a936b17001be68843",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-12T17:05:14.466Z",
          "updatedAt": "2023-03-12T17:05:14.939Z",
          "number": 43535
        },
        {
          "_id": "640e07a6936b17001be6885b",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cc"
          ],
          "status": "done",
          "name": "Space spicy флюоресцентный бургер",
          "createdAt": "2023-03-12T17:11:02.259Z",
          "updatedAt": "2023-03-12T17:11:02.704Z",
          "number": 43540
        },
        {
          "_id": "640e07ba936b17001be6885c",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-12T17:11:22.396Z",
          "updatedAt": "2023-03-12T17:11:22.799Z",
          "number": 43541
        },
        {
          "_id": "640f1e13936b17001be68ec1",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733ca"
          ],
          "status": "done",
          "name": "Био-марсианский краторный метеоритный бургер",
          "createdAt": "2023-03-13T12:58:59.600Z",
          "updatedAt": "2023-03-13T12:58:59.967Z",
          "number": 43672
        },
        {
          "_id": "640f1e45936b17001be68ec5",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733d1"
          ],
          "status": "done",
          "name": "Spicy фалленианский краторный бургер",
          "createdAt": "2023-03-13T12:59:49.285Z",
          "updatedAt": "2023-03-13T12:59:49.716Z",
          "number": 43673
        },
        {
          "_id": "6412f7f5936b17001be6a75f",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-16T11:05:25.472Z",
          "updatedAt": "2023-03-16T11:05:25.903Z",
          "number": 44204
        },
        {
          "_id": "64140a78936b17001be6b2c9",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-17T06:36:40.728Z",
          "updatedAt": "2023-03-17T06:36:41.185Z",
          "number": 44437
        },
        {
          "_id": "64157e7d936b17001be6c007",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-18T09:03:57.711Z",
          "updatedAt": "2023-03-18T09:03:58.144Z",
          "number": 44637
        },
        {
          "_id": "64157e96936b17001be6c00a",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-18T09:04:22.928Z",
          "updatedAt": "2023-03-18T09:04:23.353Z",
          "number": 44638
        },
        {
          "_id": "6419ce74936b17001be71799",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-21T15:34:12.176Z",
          "updatedAt": "2023-03-21T15:34:12.556Z",
          "number": 45170
        },
        {
          "_id": "641aaa32936b17001be71dc0",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space краторный бургер",
          "createdAt": "2023-03-22T07:11:46.781Z",
          "updatedAt": "2023-03-22T07:11:47.279Z",
          "number": 45222
        },
        {
          "_id": "641ac014936b17001be71e6b",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c8"
          ],
          "status": "done",
          "name": "Люминесцентный spicy флюоресцентный бессмертный space антарианский бургер",
          "createdAt": "2023-03-22T08:45:08.835Z",
          "updatedAt": "2023-03-22T08:45:09.215Z",
          "number": 45240
        },
        {
          "_id": "641b06f0936b17001be72100",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space краторный бургер",
          "createdAt": "2023-03-22T13:47:28.386Z",
          "updatedAt": "2023-03-22T13:47:28.788Z",
          "number": 45343
        },
        {
          "_id": "641b0f40936b17001be72136",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-22T14:22:56.034Z",
          "updatedAt": "2023-03-22T14:22:56.475Z",
          "number": 45352
        },
        {
          "_id": "641d7e9f936b17001be72bfd",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733c9"
          ],
          "status": "done",
          "name": "Бессмертный флюоресцентный бургер",
          "createdAt": "2023-03-24T10:42:39.518Z",
          "updatedAt": "2023-03-24T10:42:40.062Z",
          "number": 45746
        },
        {
          "_id": "641d8087936b17001be72c09",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-24T10:50:47.556Z",
          "updatedAt": "2023-03-24T10:50:48.080Z",
          "number": 45747
        },
        {
          "_id": "641d80ae936b17001be72c0a",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733ca"
          ],
          "status": "done",
          "name": "Био-марсианский флюоресцентный метеоритный бургер",
          "createdAt": "2023-03-24T10:51:26.506Z",
          "updatedAt": "2023-03-24T10:51:26.994Z",
          "number": 45748
        },
        {
          "_id": "641da43e936b17001be72cb0",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733d3"
          ],
          "status": "done",
          "name": "Экзо-плантаго флюоресцентный минеральный space био-марсианский бургер",
          "createdAt": "2023-03-24T13:23:10.383Z",
          "updatedAt": "2023-03-24T13:23:10.811Z",
          "number": 45771
        },
        {
          "_id": "641da7bc936b17001be72cd1",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733ca",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733cf"
          ],
          "status": "done",
          "name": "Люминесцентный метеоритный краторный астероидный антарианский бургер",
          "createdAt": "2023-03-24T13:38:04.631Z",
          "updatedAt": "2023-03-24T13:38:05.070Z",
          "number": 45784
        },
        {
          "_id": "641dca05936b17001be72d43",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733ce",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733ca",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733d2",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733d4"
          ],
          "status": "done",
          "name": "Люминесцентный фалленианский антарианский экзо-плантаго spicy флюоресцентный минеральный астероидный бессмертный space альфа-сахаридный метеоритный био-марсианский традиционный-галактический бургер",
          "createdAt": "2023-03-24T16:04:21.542Z",
          "updatedAt": "2023-03-24T16:04:21.958Z",
          "number": 45797
        },
        {
          "_id": "641dcad6936b17001be72d44",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733d2"
          ],
          "status": "done",
          "name": "Астероидный экзо-плантаго альфа-сахаридный краторный бургер",
          "createdAt": "2023-03-24T16:07:50.176Z",
          "updatedAt": "2023-03-24T16:07:50.680Z",
          "number": 45798
        },
        {
          "_id": "641de352936b17001be72dc0",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733ca"
          ],
          "status": "done",
          "name": "Люминесцентный краторный бессмертный space метеоритный био-марсианский бургер",
          "createdAt": "2023-03-24T17:52:18.717Z",
          "updatedAt": "2023-03-24T17:52:19.177Z",
          "number": 45806
        },
        {
          "_id": "641de381936b17001be72dc1",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733ca",
            "60d3b41abdacab0026a733d0"
          ],
          "status": "done",
          "name": "Люминесцентный флюоресцентный минеральный бессмертный space метеоритный био-марсианский бургер",
          "createdAt": "2023-03-24T17:53:05.423Z",
          "updatedAt": "2023-03-24T17:53:05.807Z",
          "number": 45807
        },
        {
          "_id": "641eebe6936b17001be735a7",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733ce",
            "60d3b41abdacab0026a733ca",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733d4"
          ],
          "status": "done",
          "name": "Люминесцентный экзо-плантаго флюоресцентный минеральный астероидный бессмертный space метеоритный традиционный-галактический бургер",
          "createdAt": "2023-03-25T12:41:10.333Z",
          "updatedAt": "2023-03-25T12:41:10.840Z",
          "number": 45872
        },
        {
          "_id": "641eec15936b17001be735a8",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733d2"
          ],
          "status": "done",
          "name": "Экзо-плантаго альфа-сахаридный минеральный краторный бургер",
          "createdAt": "2023-03-25T12:41:57.542Z",
          "updatedAt": "2023-03-25T12:41:58.076Z",
          "number": 45873
        },
        {
          "_id": "641f448d936b17001be73730",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-25T18:59:25.825Z",
          "updatedAt": "2023-03-25T18:59:26.250Z",
          "number": 45924
        },
        {
          "_id": "641f5c5d936b17001be7377e",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733d4"
          ],
          "status": "done",
          "name": "Био-марсианский астероидный экзо-плантаго флюоресцентный бургер",
          "createdAt": "2023-03-25T20:41:01.724Z",
          "updatedAt": "2023-03-25T20:41:02.150Z",
          "number": 45936
        },
        {
          "_id": "641ffe8e0905fd001b6233bc",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733d4"
          ],
          "status": "done",
          "name": "Астероидный экзо-плантаго краторный бургер",
          "createdAt": "2023-03-26T08:13:02.853Z",
          "updatedAt": "2023-03-26T08:13:03.392Z",
          "number": 45998
        },
        {
          "_id": "6420001a0905fd001b6233bd",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733ce",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733d3"
          ],
          "status": "done",
          "name": "Люминесцентный экзо-плантаго краторный минеральный традиционный-галактический бургер",
          "createdAt": "2023-03-26T08:19:38.158Z",
          "updatedAt": "2023-03-26T08:19:38.572Z",
          "number": 45999
        },
        {
          "_id": "64242dad0905fd001b62454d",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733cb"
          ],
          "status": "done",
          "name": "Био-марсианский бессмертный краторный антарианский бургер",
          "createdAt": "2023-03-29T12:23:09.985Z",
          "updatedAt": "2023-03-29T12:23:10.890Z",
          "number": 46619
        },
        {
          "_id": "64267ff90905fd001b625321",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733cb"
          ],
          "status": "done",
          "name": "Био-марсианский бессмертный люминесцентный флюоресцентный бургер",
          "createdAt": "2023-03-31T06:38:49.877Z",
          "updatedAt": "2023-03-31T06:38:50.308Z",
          "number": 46935
        },
        {
          "_id": "6426d7b00905fd001b62576a",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733d2"
          ],
          "status": "done",
          "name": "Фалленианский флюоресцентный минеральный space альфа-сахаридный бургер",
          "createdAt": "2023-03-31T12:53:04.046Z",
          "updatedAt": "2023-03-31T12:53:04.687Z",
          "number": 47034
        },
        {
          "_id": "6426d8010905fd001b625775",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733ce",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733ca"
          ],
          "status": "done",
          "name": "Люминесцентный метеоритный краторный антарианский традиционный-галактический бургер",
          "createdAt": "2023-03-31T12:54:25.172Z",
          "updatedAt": "2023-03-31T12:54:25.722Z",
          "number": 47035
        },
        {
          "_id": "642705b60905fd001b625907",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733c9"
          ],
          "status": "done",
          "name": "Фалленианский spicy флюоресцентный бессмертный био-марсианский бургер",
          "createdAt": "2023-03-31T16:09:26.625Z",
          "updatedAt": "2023-03-31T16:09:27.200Z",
          "number": 47091
        }
      ]
    })
  })
})