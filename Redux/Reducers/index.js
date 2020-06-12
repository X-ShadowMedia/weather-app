// Imports: Dependencies
import { combineReducers } from "redux";

// Imports: Reducers
import noteReducer from "./noteReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  noteReducer: noteReducer,
});

// Exports
export default rootReducer;
