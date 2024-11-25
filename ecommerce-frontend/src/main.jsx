import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ uses createRoot API
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"; // Alias BrowserRouter for cleaner code
import App from "./App";
import store from "./redux/store";
import "./index.css";  // Global CSS

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Provide Redux store to the app */}
      <Router>  {/* BrowserRouter is aliased to Router for cleaner code */}
        <App />  {/* Main app component */}
      </Router>
    </Provider>
  </React.StrictMode>
);
