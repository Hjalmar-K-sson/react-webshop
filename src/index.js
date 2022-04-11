import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/User.context";
import App from "./App";

import "./index.sass";

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
