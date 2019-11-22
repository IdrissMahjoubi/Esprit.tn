import axios from "../api";
import {
  GET_CALENDAR,
  CALENDAR_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
} from "./types";

export const getCalendar = () => dispatch => {
  dispatch(setCalendarLoading());
  axios
    .get("/calendar/")
    .then(res => {
      dispatch({
        type: GET_CALENDAR,
        payload: res.data
      });
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};


// Set loading state
export const setCalendarLoading = () => {
  return {
    type: CALENDAR_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
