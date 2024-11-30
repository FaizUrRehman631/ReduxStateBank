import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import {thunk} from "redux-thunk"; // Correct import for redux-thunk

// Configure the Redux store
export const store = configureStore({
  reducer: reducers, // Combined reducers
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});