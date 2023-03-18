import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { reducers } from "./root-reducer";

export const store = configureStore({
  reducer: reducers,
  // middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);
