import axios from "../api";
import {
  GET_ALL_PRESS,
  GET_PRESS,
  GET_ARCHIVED,
  PRESS_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
} from "../actions/types";

export const getAllPress = () => dispatch => {
  dispatch(setPressLoading());
  axios
    .get("/press")
    .then(res => {
      dispatch({
        type: GET_ALL_PRESS,
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

export const getArchived = () => dispatch => {
  dispatch(setPressLoading());
  axios
    .get("/press/archived")
    .then(res => {
      dispatch({
        type: GET_ARCHIVED,
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

export const getPress = id => dispatch => {
  dispatch(setPressLoading());
  axios
    .get(`/press/${id}`)
    .then(res =>
      dispatch({
        type: GET_PRESS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Set loading state
export const setPressLoading = () => {
  return {
    type: PRESS_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
