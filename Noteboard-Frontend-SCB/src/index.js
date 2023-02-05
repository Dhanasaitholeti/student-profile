import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles.css"
import { Provider } from "react-redux";
import store from "./redux/configureStore"
 
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </StrictMode>
);
