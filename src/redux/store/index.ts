import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { reducers } from "./root-reducer";
import globalReducer from "../slices";

export const store = configureStore({
  // reducer: {
  //   global: globalReducer,
  // },
  reducer: reducers,
  // middleware: (getDefault) => getDefault().concat(api.middleware),
});
// setupListeners(store.dispatch);
