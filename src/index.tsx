import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {Provider} from "react-redux";
import {compose, Dispatch} from "redux";
import {rootReducer} from "./services/reducers";
import thunk from "redux-thunk";
import {HashRouter as Router} from 'react-router-dom';
import {configureStore} from "@reduxjs/toolkit";
import {TApplicationActions} from "./utils/types";
import {socketMiddleware} from "./utils/socketMiddleware";
import {feedWsActions, ordersWsActions} from "./utils/wsActionTypes";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, socketMiddleware(feedWsActions), socketMiddleware(ordersWsActions)],
  enhancers: [compose]
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<TApplicationActions>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
  </React.StrictMode>
);
