import { combineReducers } from "redux";
import { reducer as synonymsReducer } from "@modules/Synonyms/reducer";

export const reducer = combineReducers({
  synonymsReducer,
});

export type reducerType = ReturnType<typeof reducer>;
export default reducer;
