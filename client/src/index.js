//components
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

//stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

//redux store
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
