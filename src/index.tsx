import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {compose, Dispatch} from "redux";
import {rootReducer} from "./services/reducers";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from 'react-router-dom';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
