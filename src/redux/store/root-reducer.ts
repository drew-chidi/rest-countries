import { combineReducers } from "redux";
import globalReducer from "../slices";

export const reducers = combineReducers({
  globalStore: globalReducer,
});
