import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import eventReducer from "./eventReducer";
import pressReducer from "./pressReducer";
import partnersReducer from './partnersReducer';

export default combineReducers({
  errors: errorReducer,
  event: eventReducer,
  press: pressReducer,
  partners: partnersReducer,
});
