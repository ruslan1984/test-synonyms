import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { fork } from "redux-saga/effects";
import { Provider } from "react-redux";
import App from "@/App";
import reducer from "@store/reducers";
import GlobalStyles from "./GlobalStyles";
import { synonymsSaga } from "@modules/Synonyms/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield fork(synonymsSaga);
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
