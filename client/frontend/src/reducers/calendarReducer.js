import {
  GET_CALENDAR,
  CALENDAR_LOADING
  } from "../actions/types";
  
  const initialState = {
    calendar: [],
    loading: false,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case CALENDAR_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_CALENDAR:
        return {
          ...state,
          calendar: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }
  
  