import { combineReducers } from "redux";
import auth from "./authReducer";
import dictionaryReducer from "./dictionaryReducer";
import optionsReducer from "./optionsReducer";
import resultReducer from "./resultReducer";
import tests from "./testsReducer";

const rootReducer = combineReducers({
  tests: tests,
  options: optionsReducer,
  result: resultReducer,
  dictionary: dictionaryReducer,
  auth: auth,
});

export default rootReducer;