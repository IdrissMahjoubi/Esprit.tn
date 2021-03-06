import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import eventReducer from "./eventReducer";
import pressReducer from "./pressReducer";
import partnersReducer from './partnersReducer';
import slidersReducer from './slidersReducer';
import rdisReducer from './rdiReducer';
import clubsReducer from './clubReducer';
import calendarReducer from './calendarReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  errors: errorReducer,
  event: eventReducer,
  press: pressReducer,
  partners: partnersReducer,
  sliders: slidersReducer,
  rdis: rdisReducer,
  clubs: clubsReducer,
  calendar: calendarReducer,
  news: newsReducer,
});
