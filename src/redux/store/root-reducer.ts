import { combineReducers } from "redux";
import globalReducer from "../slices";

// Reducers types
export type ReducerTypes = {
  globalStore: ReturnType<typeof globalReducer>;
};

export const reducers = combineReducers({
  globalStore: globalReducer,
});

// export const rootReducer = (state, action) => {
//   if (action.type === "LOGOUT") {
//     localStorage.clear();
//     return reducers(undefined, action);
//   }
//   return reducers(state, action);
// };
