import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "@/App";
import reducer from "@store/reducers";
import GlobalStyles from "./GlobalStyles";

export const store = configureStore({
  reducer,
});

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
