import { combineReducers } from "redux";
import { reducer as testReducer } from "@modules/Test/reducer";

export const reducer = combineReducers({
  testReducer,
});

export type reducerType = ReturnType<typeof reducer>;
export default reducer;
