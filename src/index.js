import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { CategoriesProvider } from "./contexts/Categories.context";
import { CartProvider } from "./contexts/Cart.context";
import App from "./App";

import "./index.sass";

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
