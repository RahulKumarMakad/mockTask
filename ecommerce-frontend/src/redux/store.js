import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer"; // Assuming you are using a combined root reducer

// Configure the store using Redux Toolkit's configureStore
const store = configureStore({
  reducer: rootReducer, // your combined reducers
  // Optionally, add middleware if needed. By default, configureStore adds `redux-thunk`
});

export default store;
