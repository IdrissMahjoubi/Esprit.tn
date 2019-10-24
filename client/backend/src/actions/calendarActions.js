import axios from "../api";
import {
 CALENDAR_LOADING,
 ADD_CALENDAR,
 EDIT_CALENDAR,
 GET_CALENDAR,
 IS_MODIFIED_CALENDAR,
 GET_ERRORS,
 CLEAR_ERRORS
  // SEARCH_EVENT,
} from "../actions/types";

export const addCalendar = (eventData) => dispatch => {
  dispatch(clearErrors());
  axios.post("/calendar/add", eventData)
    .then(res =>
        dispatch({
        type: ADD_CALENDAR,
        payload: res.data
      })
    )
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




export const getCalendar = () => dispatch => {
  dispatch(setCalendarLoading());
  axios
    .get("/calendar")
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



export const editCalendar = (eventData) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/calendar/update`, eventData)
    .then(res =>
      dispatch({
        type: EDIT_CALENDAR,
        payload: res.data
      })
    )
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

export const setIsModifiedCalendarLoading = () => {
  return {
    type: IS_MODIFIED_CALENDAR
  };
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
