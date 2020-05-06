import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./Components/App/App";
import { theme } from "./Components/Styles/Styles";
import { ThemeProvider } from "@material-ui/core";

import "normalize.css";

render(
  <Router basename="app">
    <Route
      render={(props) => (
        <ThemeProvider theme={theme}>
          <App {...props} />
        </ThemeProvider>
      )}
    />
  </Router>,
  document.getElementById("app")
);
