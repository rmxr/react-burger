import {feedReducer as reducer} from "./feedReducer";
import {
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_SUCCESS,
  FEED_GET_MESSAGE
} from "../../utils/wsActionTypes";

describe("feed reducer", () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      total: 0, totalToday: 0,
      wsConnected: false,
      orders: []
    })
  })
  it('should handle FEED_CONNECTION_SUCCESS', () => {
    expect(reducer({
      total: 0, totalToday: 0,
      wsConnected: false,
      orders: []
    }, {
      "type": FEED_CONNECTION_SUCCESS,
      "payload": {
        "isTrusted": true
      }
    })).toEqual({
      total: 0, totalToday: 0,
      wsConnected: true,
      orders: []
    })
  })

  it('should handle FEED_CONNECTION_ERROR', () => {
    expect(reducer({
      total: 0, totalToday: 0,
      wsConnected: true,
      orders: []
    }, {
      type: FEED_CONNECTION_ERROR,
      payload: "error",
    })).toEqual({
      total: 0, totalToday: 0,
      wsConnected: false,
      error: "error",
      orders: []
    })
  })

  it('should handle FEED_CONNECTION_CLOSED', () => {
    expect(reducer({
      total: 0, totalToday: 0,
      wsConnected: true,
      orders: []
    }, {
      type: FEED_CONNECTION_CLOSED,
    })).toEqual({
      total: 0, totalToday: 0,
      wsConnected: false,
      orders: [],
      error: undefined,
    })
  })

  it('should handle FEED_GET_MESSAGE', () => {
    expect(reducer({
      total: 0, totalToday: 0,
      wsConnected: true,
      orders: []
    }, {
      type: FEED_GET_MESSAGE,
      payload: "{\"success\":true,\"orders\":[{\"_id\":\"6427124d0905fd001b62596b\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Био-марсианский бессмертный краторный бургер\",\"createdAt\":\"2023-03-31T17:03:09.223Z\",\"updatedAt\":\"2023-03-31T17:03:09.763Z\",\"number\":47101},{\"_id\":\"642712290905fd001b62596a\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-31T17:02:33.276Z\",\"updatedAt\":\"2023-03-31T17:02:33.749Z\",\"number\":47100},{\"_id\":\"64270ee20905fd001b62593e\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\"],\"status\":\"done\",\"name\":\"Spicy краторный бургер\",\"createdAt\":\"2023-03-31T16:48:34.015Z\",\"updatedAt\":\"2023-03-31T16:48:34.518Z\",\"number\":47099},{\"_id\":\"64270da70905fd001b62593b\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Био-марсианский space флюоресцентный антарианский бургер\",\"createdAt\":\"2023-03-31T16:43:19.996Z\",\"updatedAt\":\"2023-03-31T16:43:20.506Z\",\"number\":47098},{\"_id\":\"642709c60905fd001b625920\",\"ingredients\":[\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Spicy люминесцентный краторный бургер\",\"createdAt\":\"2023-03-31T16:26:46.107Z\",\"updatedAt\":\"2023-03-31T16:26:46.586Z\",\"number\":47097},{\"_id\":\"642709430905fd001b62591a\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Бессмертный флюоресцентный бургер\",\"createdAt\":\"2023-03-31T16:24:35.473Z\",\"updatedAt\":\"2023-03-31T16:24:35.977Z\",\"number\":47096},{\"_id\":\"6427091d0905fd001b625919\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733d2\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Фалленианский экзо-плантаго spicy флюоресцентный астероидный space альфа-сахаридный бургер\",\"createdAt\":\"2023-03-31T16:23:57.786Z\",\"updatedAt\":\"2023-03-31T16:23:58.277Z\",\"number\":47095},{\"_id\":\"642709050905fd001b625917\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Био-марсианский бессмертный флюоресцентный бургер\",\"createdAt\":\"2023-03-31T16:23:33.529Z\",\"updatedAt\":\"2023-03-31T16:23:33.967Z\",\"number\":47094},{\"_id\":\"642708d60905fd001b625916\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Бессмертный флюоресцентный бургер\",\"createdAt\":\"2023-03-31T16:22:46.007Z\",\"updatedAt\":\"2023-03-31T16:22:46.549Z\",\"number\":47093},{\"_id\":\"642706860905fd001b62590c\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Астероидный бессмертный space краторный бургер\",\"createdAt\":\"2023-03-31T16:12:54.058Z\",\"updatedAt\":\"2023-03-31T16:12:54.652Z\",\"number\":47092},{\"_id\":\"642705b60905fd001b625907\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733c9\"],\"status\":\"done\",\"name\":\"Фалленианский spicy флюоресцентный бессмертный био-марсианский бургер\",\"createdAt\":\"2023-03-31T16:09:26.625Z\",\"updatedAt\":\"2023-03-31T16:09:27.200Z\",\"number\":47091},{\"_id\":\"642705330905fd001b625905\",\"ingredients\":[\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733ca\",\"60d3b41abdacab0026a733d0\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Люминесцентный экзо-плантаго флюоресцентный минеральный астероидный space метеоритный бургер\",\"createdAt\":\"2023-03-31T16:07:15.773Z\",\"updatedAt\":\"2023-03-31T16:07:16.354Z\",\"number\":47090},{\"_id\":\"642705030905fd001b625903\",\"ingredients\":[\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733d2\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Фалленианский флюоресцентный астероидный бессмертный space альфа-сахаридный бургер\",\"createdAt\":\"2023-03-31T16:06:27.955Z\",\"updatedAt\":\"2023-03-31T16:06:28.473Z\",\"number\":47089},{\"_id\":\"642704410905fd001b6258fb\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-31T16:03:13.773Z\",\"updatedAt\":\"2023-03-31T16:03:14.288Z\",\"number\":47088},{\"_id\":\"642701fc0905fd001b6258e4\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\"],\"status\":\"done\",\"name\":\"Spicy краторный бургер\",\"createdAt\":\"2023-03-31T15:53:32.921Z\",\"updatedAt\":\"2023-03-31T15:53:33.480Z\",\"number\":47087},{\"_id\":\"642701d30905fd001b6258df\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\"],\"status\":\"done\",\"name\":\"Spicy краторный бургер\",\"createdAt\":\"2023-03-31T15:52:51.141Z\",\"updatedAt\":\"2023-03-31T15:52:51.599Z\",\"number\":47086},{\"_id\":\"642701380905fd001b6258d5\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733d0\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Фалленианский краторный spicy минеральный space антарианский бургер\",\"createdAt\":\"2023-03-31T15:50:16.602Z\",\"updatedAt\":\"2023-03-31T15:50:17.087Z\",\"number\":47085},{\"_id\":\"6426feaf0905fd001b6258bc\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733ce\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Люминесцентный флюоресцентный бессмертный space антарианский био-марсианский традиционный-галактический бургер\",\"createdAt\":\"2023-03-31T15:39:27.224Z\",\"updatedAt\":\"2023-03-31T15:39:27.679Z\",\"number\":47084},{\"_id\":\"6426fc2d0905fd001b6258aa\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733d2\"],\"status\":\"done\",\"name\":\"Space флюоресцентный альфа-сахаридный бургер\",\"createdAt\":\"2023-03-31T15:28:45.415Z\",\"updatedAt\":\"2023-03-31T15:28:45.953Z\",\"number\":47083},{\"_id\":\"6426fbaa0905fd001b6258a0\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733d0\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733ce\"],\"status\":\"done\",\"name\":\"Экзо-плантаго флюоресцентный минеральный астероидный антарианский био-марсианский традиционный-галактический бургер\",\"createdAt\":\"2023-03-31T15:26:34.729Z\",\"updatedAt\":\"2023-03-31T15:26:35.178Z\",\"number\":47082},{\"_id\":\"6426fb570905fd001b625899\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Space spicy флюоресцентный бургер\",\"createdAt\":\"2023-03-31T15:25:11.814Z\",\"updatedAt\":\"2023-03-31T15:25:12.307Z\",\"number\":47081},{\"_id\":\"6426fabf0905fd001b62588f\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-31T15:22:39.237Z\",\"updatedAt\":\"2023-03-31T15:22:39.709Z\",\"number\":47080},{\"_id\":\"6426fa050905fd001b625887\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-31T15:19:33.141Z\",\"updatedAt\":\"2023-03-31T15:19:33.575Z\",\"number\":47079},{\"_id\":\"6426f9f60905fd001b625885\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-31T15:19:18.362Z\",\"updatedAt\":\"2023-03-31T15:19:18.864Z\",\"number\":47078},{\"_id\":\"6426f9d60905fd001b625882\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space краторный антарианский бургер\",\"createdAt\":\"2023-03-31T15:18:46.058Z\",\"updatedAt\":\"2023-03-31T15:18:46.458Z\",\"number\":47077},{\"_id\":\"6426f6ab0905fd001b625869\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733ce\"],\"status\":\"done\",\"name\":\"Краторный spicy space антарианский традиционный-галактический бургер\",\"createdAt\":\"2023-03-31T15:05:15.846Z\",\"updatedAt\":\"2023-03-31T15:05:16.310Z\",\"number\":47076},{\"_id\":\"6426f5450905fd001b62585f\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-31T14:59:17.964Z\",\"updatedAt\":\"2023-03-31T14:59:18.486Z\",\"number\":47075},{\"_id\":\"6426f4380905fd001b625855\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733d3\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Экзо-плантаго фалленианский краторный space антарианский бургер\",\"createdAt\":\"2023-03-31T14:54:48.781Z\",\"updatedAt\":\"2023-03-31T14:54:49.266Z\",\"number\":47074},{\"_id\":\"6426f00f0905fd001b625836\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Spicy люминесцентный краторный бургер\",\"createdAt\":\"2023-03-31T14:37:03.939Z\",\"updatedAt\":\"2023-03-31T14:37:05.458Z\",\"number\":47073},{\"_id\":\"6426efd10905fd001b62582d\",\"ingredients\":[\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Spicy люминесцентный краторный бургер\",\"createdAt\":\"2023-03-31T14:36:01.390Z\",\"updatedAt\":\"2023-03-31T14:36:01.978Z\",\"number\":47072},{\"_id\":\"6426efb00905fd001b62582a\",\"ingredients\":[\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Space флюоресцентный антарианский бургер\",\"createdAt\":\"2023-03-31T14:35:28.527Z\",\"updatedAt\":\"2023-03-31T14:35:29.056Z\",\"number\":47071},{\"_id\":\"6426ee390905fd001b62581f\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cf\"],\"status\":\"done\",\"name\":\"Space флюоресцентный антарианский бургер\",\"createdAt\":\"2023-03-31T14:29:13.043Z\",\"updatedAt\":\"2023-03-31T14:29:13.550Z\",\"number\":47070},{\"_id\":\"6426eded0905fd001b62581d\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-31T14:27:57.872Z\",\"updatedAt\":\"2023-03-31T14:27:58.364Z\",\"number\":47069},{\"_id\":\"6426edd20905fd001b62581b\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\"],\"status\":\"done\",\"name\":\"Space флюоресцентный бургер\",\"createdAt\":\"2023-03-31T14:27:30.470Z\",\"updatedAt\":\"2023-03-31T14:27:30.901Z\",\"number\":47068},{\"_id\":\"6426edb80905fd001b62581a\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cb\"],\"status\":\"done\",\"name\":\"Био-марсианский space флюоресцентный бургер\",\"createdAt\":\"2023-03-31T14:27:04.471Z\",\"updatedAt\":\"2023-03-31T14:27:04.913Z\",\"number\":47067},{\"_id\":\"6426ed470905fd001b625817\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733d3\"],\"status\":\"done\",\"name\":\"Space экзо-плантаго флюоресцентный бургер\",\"createdAt\":\"2023-03-31T14:25:11.058Z\",\"updatedAt\":\"2023-03-31T14:25:11.509Z\",\"number\":47066},{\"_id\":\"6426ec8a0905fd001b625815\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733d1\",\"60d3b41abdacab0026a733c9\"],\"status\":\"done\",\"name\":\"Бессмертный фалленианский флюоресцентный бургер\",\"createdAt\":\"2023-03-31T14:22:02.176Z\",\"updatedAt\":\"2023-03-31T14:22:02.721Z\",\"number\":47065},{\"_id\":\"6426ec750905fd001b625814\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Space краторный антарианский бургер\",\"createdAt\":\"2023-03-31T14:21:41.721Z\",\"updatedAt\":\"2023-03-31T14:21:42.187Z\",\"number\":47064},{\"_id\":\"6426ec6e0905fd001b625811\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cd\",\"60d3b41abdacab0026a733d3\"],\"status\":\"done\",\"name\":\"Space экзо-плантаго флюоресцентный бургер\",\"createdAt\":\"2023-03-31T14:21:34.155Z\",\"updatedAt\":\"2023-03-31T14:21:34.749Z\",\"number\":47063},{\"_id\":\"6426ec130905fd001b625809\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Астероидный краторный бургер\",\"createdAt\":\"2023-03-31T14:20:03.236Z\",\"updatedAt\":\"2023-03-31T14:20:03.723Z\",\"number\":47062},{\"_id\":\"6426ec0a0905fd001b625805\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Астероидный краторный бургер\",\"createdAt\":\"2023-03-31T14:19:54.625Z\",\"updatedAt\":\"2023-03-31T14:19:55.107Z\",\"number\":47061},{\"_id\":\"6426ebe90905fd001b625801\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733d4\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Астероидный краторный бургер\",\"createdAt\":\"2023-03-31T14:19:21.230Z\",\"updatedAt\":\"2023-03-31T14:19:21.708Z\",\"number\":47060},{\"_id\":\"6426e9620905fd001b6257f7\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733d2\"],\"status\":\"done\",\"name\":\"Бессмертный флюоресцентный альфа-сахаридный антарианский бургер\",\"createdAt\":\"2023-03-31T14:08:34.845Z\",\"updatedAt\":\"2023-03-31T14:08:35.361Z\",\"number\":47059},{\"_id\":\"6426e45c0905fd001b6257e6\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733d4\"],\"status\":\"done\",\"name\":\"Spicy астероидный люминесцентный краторный бургер\",\"createdAt\":\"2023-03-31T13:47:08.503Z\",\"updatedAt\":\"2023-03-31T13:47:08.962Z\",\"number\":47058},{\"_id\":\"6426e2da0905fd001b6257de\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Spicy люминесцентный краторный бургер\",\"createdAt\":\"2023-03-31T13:40:42.781Z\",\"updatedAt\":\"2023-03-31T13:40:43.382Z\",\"number\":47057},{\"_id\":\"6426e2b00905fd001b6257da\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733cb\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733c7\"],\"status\":\"done\",\"name\":\"Био-марсианский бессмертный люминесцентный флюоресцентный бургер\",\"createdAt\":\"2023-03-31T13:40:00.320Z\",\"updatedAt\":\"2023-03-31T13:40:00.846Z\",\"number\":47056},{\"_id\":\"6426e2020905fd001b6257d5\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Spicy люминесцентный краторный бургер\",\"createdAt\":\"2023-03-31T13:37:06.678Z\",\"updatedAt\":\"2023-03-31T13:37:07.161Z\",\"number\":47055},{\"_id\":\"6426e1cb0905fd001b6257d1\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733d2\"],\"status\":\"done\",\"name\":\"Бессмертный флюоресцентный альфа-сахаридный антарианский бургер\",\"createdAt\":\"2023-03-31T13:36:11.737Z\",\"updatedAt\":\"2023-03-31T13:36:12.207Z\",\"number\":47054},{\"_id\":\"6426e1a90905fd001b6257cd\",\"ingredients\":[\"60d3b41abdacab0026a733c6\",\"60d3b41abdacab0026a733cc\",\"60d3b41abdacab0026a733c8\",\"60d3b41abdacab0026a733c6\"],\"status\":\"done\",\"name\":\"Spicy люминесцентный краторный бургер\",\"createdAt\":\"2023-03-31T13:35:37.961Z\",\"updatedAt\":\"2023-03-31T13:35:38.648Z\",\"number\":47053},{\"_id\":\"6426e1800905fd001b6257cb\",\"ingredients\":[\"60d3b41abdacab0026a733c7\",\"60d3b41abdacab0026a733cf\",\"60d3b41abdacab0026a733c9\",\"60d3b41abdacab0026a733d2\"],\"status\":\"done\",\"name\":\"Бессмертный флюоресцентный альфа-сахаридный антарианский бургер\",\"createdAt\":\"2023-03-31T13:34:56.217Z\",\"updatedAt\":\"2023-03-31T13:34:56.712Z\",\"number\":47052}],\"total\":47010,\"totalToday\":202}"
    })).toEqual({
      "total": 47010,
      "totalToday": 202,
      "wsConnected": true,
      "orders": [
        {
          "_id": "6427124d0905fd001b62596b",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Био-марсианский бессмертный краторный бургер",
          "createdAt": "2023-03-31T17:03:09.223Z",
          "updatedAt": "2023-03-31T17:03:09.763Z",
          "number": 47101
        },
        {
          "_id": "642712290905fd001b62596a",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-31T17:02:33.276Z",
          "updatedAt": "2023-03-31T17:02:33.749Z",
          "number": 47100
        },
        {
          "_id": "64270ee20905fd001b62593e",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc"
          ],
          "status": "done",
          "name": "Spicy краторный бургер",
          "createdAt": "2023-03-31T16:48:34.015Z",
          "updatedAt": "2023-03-31T16:48:34.518Z",
          "number": 47099
        },
        {
          "_id": "64270da70905fd001b62593b",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Био-марсианский space флюоресцентный антарианский бургер",
          "createdAt": "2023-03-31T16:43:19.996Z",
          "updatedAt": "2023-03-31T16:43:20.506Z",
          "number": 47098
        },
        {
          "_id": "642709c60905fd001b625920",
          "ingredients": [
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Spicy люминесцентный краторный бургер",
          "createdAt": "2023-03-31T16:26:46.107Z",
          "updatedAt": "2023-03-31T16:26:46.586Z",
          "number": 47097
        },
        {
          "_id": "642709430905fd001b62591a",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Бессмертный флюоресцентный бургер",
          "createdAt": "2023-03-31T16:24:35.473Z",
          "updatedAt": "2023-03-31T16:24:35.977Z",
          "number": 47096
        },
        {
          "_id": "6427091d0905fd001b625919",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733d2",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Фалленианский экзо-плантаго spicy флюоресцентный астероидный space альфа-сахаридный бургер",
          "createdAt": "2023-03-31T16:23:57.786Z",
          "updatedAt": "2023-03-31T16:23:58.277Z",
          "number": 47095
        },
        {
          "_id": "642709050905fd001b625917",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Био-марсианский бессмертный флюоресцентный бургер",
          "createdAt": "2023-03-31T16:23:33.529Z",
          "updatedAt": "2023-03-31T16:23:33.967Z",
          "number": 47094
        },
        {
          "_id": "642708d60905fd001b625916",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Бессмертный флюоресцентный бургер",
          "createdAt": "2023-03-31T16:22:46.007Z",
          "updatedAt": "2023-03-31T16:22:46.549Z",
          "number": 47093
        },
        {
          "_id": "642706860905fd001b62590c",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Астероидный бессмертный space краторный бургер",
          "createdAt": "2023-03-31T16:12:54.058Z",
          "updatedAt": "2023-03-31T16:12:54.652Z",
          "number": 47092
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
        },
        {
          "_id": "642705330905fd001b625905",
          "ingredients": [
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733ca",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Люминесцентный экзо-плантаго флюоресцентный минеральный астероидный space метеоритный бургер",
          "createdAt": "2023-03-31T16:07:15.773Z",
          "updatedAt": "2023-03-31T16:07:16.354Z",
          "number": 47090
        },
        {
          "_id": "642705030905fd001b625903",
          "ingredients": [
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733d2",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Фалленианский флюоресцентный астероидный бессмертный space альфа-сахаридный бургер",
          "createdAt": "2023-03-31T16:06:27.955Z",
          "updatedAt": "2023-03-31T16:06:28.473Z",
          "number": 47089
        },
        {
          "_id": "642704410905fd001b6258fb",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-31T16:03:13.773Z",
          "updatedAt": "2023-03-31T16:03:14.288Z",
          "number": 47088
        },
        {
          "_id": "642701fc0905fd001b6258e4",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc"
          ],
          "status": "done",
          "name": "Spicy краторный бургер",
          "createdAt": "2023-03-31T15:53:32.921Z",
          "updatedAt": "2023-03-31T15:53:33.480Z",
          "number": 47087
        },
        {
          "_id": "642701d30905fd001b6258df",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc"
          ],
          "status": "done",
          "name": "Spicy краторный бургер",
          "createdAt": "2023-03-31T15:52:51.141Z",
          "updatedAt": "2023-03-31T15:52:51.599Z",
          "number": 47086
        },
        {
          "_id": "642701380905fd001b6258d5",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Фалленианский краторный spicy минеральный space антарианский бургер",
          "createdAt": "2023-03-31T15:50:16.602Z",
          "updatedAt": "2023-03-31T15:50:17.087Z",
          "number": 47085
        },
        {
          "_id": "6426feaf0905fd001b6258bc",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733ce",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Люминесцентный флюоресцентный бессмертный space антарианский био-марсианский традиционный-галактический бургер",
          "createdAt": "2023-03-31T15:39:27.224Z",
          "updatedAt": "2023-03-31T15:39:27.679Z",
          "number": 47084
        },
        {
          "_id": "6426fc2d0905fd001b6258aa",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733d2"
          ],
          "status": "done",
          "name": "Space флюоресцентный альфа-сахаридный бургер",
          "createdAt": "2023-03-31T15:28:45.415Z",
          "updatedAt": "2023-03-31T15:28:45.953Z",
          "number": 47083
        },
        {
          "_id": "6426fbaa0905fd001b6258a0",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733ce"
          ],
          "status": "done",
          "name": "Экзо-плантаго флюоресцентный минеральный астероидный антарианский био-марсианский традиционный-галактический бургер",
          "createdAt": "2023-03-31T15:26:34.729Z",
          "updatedAt": "2023-03-31T15:26:35.178Z",
          "number": 47082
        },
        {
          "_id": "6426fb570905fd001b625899",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Space spicy флюоресцентный бургер",
          "createdAt": "2023-03-31T15:25:11.814Z",
          "updatedAt": "2023-03-31T15:25:12.307Z",
          "number": 47081
        },
        {
          "_id": "6426fabf0905fd001b62588f",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-31T15:22:39.237Z",
          "updatedAt": "2023-03-31T15:22:39.709Z",
          "number": 47080
        },
        {
          "_id": "6426fa050905fd001b625887",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-31T15:19:33.141Z",
          "updatedAt": "2023-03-31T15:19:33.575Z",
          "number": 47079
        },
        {
          "_id": "6426f9f60905fd001b625885",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-31T15:19:18.362Z",
          "updatedAt": "2023-03-31T15:19:18.864Z",
          "number": 47078
        },
        {
          "_id": "6426f9d60905fd001b625882",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space краторный антарианский бургер",
          "createdAt": "2023-03-31T15:18:46.058Z",
          "updatedAt": "2023-03-31T15:18:46.458Z",
          "number": 47077
        },
        {
          "_id": "6426f6ab0905fd001b625869",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733ce"
          ],
          "status": "done",
          "name": "Краторный spicy space антарианский традиционный-галактический бургер",
          "createdAt": "2023-03-31T15:05:15.846Z",
          "updatedAt": "2023-03-31T15:05:16.310Z",
          "number": 47076
        },
        {
          "_id": "6426f5450905fd001b62585f",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-31T14:59:17.964Z",
          "updatedAt": "2023-03-31T14:59:18.486Z",
          "number": 47075
        },
        {
          "_id": "6426f4380905fd001b625855",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Экзо-плантаго фалленианский краторный space антарианский бургер",
          "createdAt": "2023-03-31T14:54:48.781Z",
          "updatedAt": "2023-03-31T14:54:49.266Z",
          "number": 47074
        },
        {
          "_id": "6426f00f0905fd001b625836",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Spicy люминесцентный краторный бургер",
          "createdAt": "2023-03-31T14:37:03.939Z",
          "updatedAt": "2023-03-31T14:37:05.458Z",
          "number": 47073
        },
        {
          "_id": "6426efd10905fd001b62582d",
          "ingredients": [
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Spicy люминесцентный краторный бургер",
          "createdAt": "2023-03-31T14:36:01.390Z",
          "updatedAt": "2023-03-31T14:36:01.978Z",
          "number": 47072
        },
        {
          "_id": "6426efb00905fd001b62582a",
          "ingredients": [
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Space флюоресцентный антарианский бургер",
          "createdAt": "2023-03-31T14:35:28.527Z",
          "updatedAt": "2023-03-31T14:35:29.056Z",
          "number": 47071
        },
        {
          "_id": "6426ee390905fd001b62581f",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cf"
          ],
          "status": "done",
          "name": "Space флюоресцентный антарианский бургер",
          "createdAt": "2023-03-31T14:29:13.043Z",
          "updatedAt": "2023-03-31T14:29:13.550Z",
          "number": 47070
        },
        {
          "_id": "6426eded0905fd001b62581d",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-31T14:27:57.872Z",
          "updatedAt": "2023-03-31T14:27:58.364Z",
          "number": 47069
        },
        {
          "_id": "6426edd20905fd001b62581b",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2023-03-31T14:27:30.470Z",
          "updatedAt": "2023-03-31T14:27:30.901Z",
          "number": 47068
        },
        {
          "_id": "6426edb80905fd001b62581a",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cb"
          ],
          "status": "done",
          "name": "Био-марсианский space флюоресцентный бургер",
          "createdAt": "2023-03-31T14:27:04.471Z",
          "updatedAt": "2023-03-31T14:27:04.913Z",
          "number": 47067
        },
        {
          "_id": "6426ed470905fd001b625817",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733d3"
          ],
          "status": "done",
          "name": "Space экзо-плантаго флюоресцентный бургер",
          "createdAt": "2023-03-31T14:25:11.058Z",
          "updatedAt": "2023-03-31T14:25:11.509Z",
          "number": 47066
        },
        {
          "_id": "6426ec8a0905fd001b625815",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733d1",
            "60d3b41abdacab0026a733c9"
          ],
          "status": "done",
          "name": "Бессмертный фалленианский флюоресцентный бургер",
          "createdAt": "2023-03-31T14:22:02.176Z",
          "updatedAt": "2023-03-31T14:22:02.721Z",
          "number": 47065
        },
        {
          "_id": "6426ec750905fd001b625814",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Space краторный антарианский бургер",
          "createdAt": "2023-03-31T14:21:41.721Z",
          "updatedAt": "2023-03-31T14:21:42.187Z",
          "number": 47064
        },
        {
          "_id": "6426ec6e0905fd001b625811",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733d3"
          ],
          "status": "done",
          "name": "Space экзо-плантаго флюоресцентный бургер",
          "createdAt": "2023-03-31T14:21:34.155Z",
          "updatedAt": "2023-03-31T14:21:34.749Z",
          "number": 47063
        },
        {
          "_id": "6426ec130905fd001b625809",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Астероидный краторный бургер",
          "createdAt": "2023-03-31T14:20:03.236Z",
          "updatedAt": "2023-03-31T14:20:03.723Z",
          "number": 47062
        },
        {
          "_id": "6426ec0a0905fd001b625805",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Астероидный краторный бургер",
          "createdAt": "2023-03-31T14:19:54.625Z",
          "updatedAt": "2023-03-31T14:19:55.107Z",
          "number": 47061
        },
        {
          "_id": "6426ebe90905fd001b625801",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733d4",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Астероидный краторный бургер",
          "createdAt": "2023-03-31T14:19:21.230Z",
          "updatedAt": "2023-03-31T14:19:21.708Z",
          "number": 47060
        },
        {
          "_id": "6426e9620905fd001b6257f7",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733d2"
          ],
          "status": "done",
          "name": "Бессмертный флюоресцентный альфа-сахаридный антарианский бургер",
          "createdAt": "2023-03-31T14:08:34.845Z",
          "updatedAt": "2023-03-31T14:08:35.361Z",
          "number": 47059
        },
        {
          "_id": "6426e45c0905fd001b6257e6",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733d4"
          ],
          "status": "done",
          "name": "Spicy астероидный люминесцентный краторный бургер",
          "createdAt": "2023-03-31T13:47:08.503Z",
          "updatedAt": "2023-03-31T13:47:08.962Z",
          "number": 47058
        },
        {
          "_id": "6426e2da0905fd001b6257de",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Spicy люминесцентный краторный бургер",
          "createdAt": "2023-03-31T13:40:42.781Z",
          "updatedAt": "2023-03-31T13:40:43.382Z",
          "number": 47057
        },
        {
          "_id": "6426e2b00905fd001b6257da",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733cb",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733c7"
          ],
          "status": "done",
          "name": "Био-марсианский бессмертный люминесцентный флюоресцентный бургер",
          "createdAt": "2023-03-31T13:40:00.320Z",
          "updatedAt": "2023-03-31T13:40:00.846Z",
          "number": 47056
        },
        {
          "_id": "6426e2020905fd001b6257d5",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Spicy люминесцентный краторный бургер",
          "createdAt": "2023-03-31T13:37:06.678Z",
          "updatedAt": "2023-03-31T13:37:07.161Z",
          "number": 47055
        },
        {
          "_id": "6426e1cb0905fd001b6257d1",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733d2"
          ],
          "status": "done",
          "name": "Бессмертный флюоресцентный альфа-сахаридный антарианский бургер",
          "createdAt": "2023-03-31T13:36:11.737Z",
          "updatedAt": "2023-03-31T13:36:12.207Z",
          "number": 47054
        },
        {
          "_id": "6426e1a90905fd001b6257cd",
          "ingredients": [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733cc",
            "60d3b41abdacab0026a733c8",
            "60d3b41abdacab0026a733c6"
          ],
          "status": "done",
          "name": "Spicy люминесцентный краторный бургер",
          "createdAt": "2023-03-31T13:35:37.961Z",
          "updatedAt": "2023-03-31T13:35:38.648Z",
          "number": 47053
        },
        {
          "_id": "6426e1800905fd001b6257cb",
          "ingredients": [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cf",
            "60d3b41abdacab0026a733c9",
            "60d3b41abdacab0026a733d2"
          ],
          "status": "done",
          "name": "Бессмертный флюоресцентный альфа-сахаридный антарианский бургер",
          "createdAt": "2023-03-31T13:34:56.217Z",
          "updatedAt": "2023-03-31T13:34:56.712Z",
          "number": 47052
        }
      ]
    })
  })
})