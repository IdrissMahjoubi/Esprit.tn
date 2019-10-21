import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import eventReducer from './eventReducer';
import newsReducer from './newsReducer';
import pressReducer from './pressReducer';
import clubReducer from './clubReducer';
import sliderReducer from './sliderReducer';
import partnershipReducer from './partnershipReducer';
import rdiReducer from './rdiReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  event: eventReducer,
  news: newsReducer,
  press: pressReducer,
  club: clubReducer,
  slider: sliderReducer,
  partnership: partnershipReducer,
  rdi: rdiReducer,
});
