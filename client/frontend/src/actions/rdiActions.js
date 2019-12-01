import axios from "../api";
import {
  GET_RDIS,
  GET_RDI,
  RDI_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
} from "../actions/types";

export const getRdis = () => dispatch => {
  dispatch(setRdiLoading());
  axios
    .get("/rdi/")
    .then(res => {
      dispatch({
        type: GET_RDIS,
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

export const getRdi = id => dispatch => {
  dispatch(setRdiLoading());
  axios
    .get(`/rdi/${id}`)
    .then(res => {
      dispatch({
        type: GET_RDI,
        payload: res.data
      })
    }
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

// Set loading state
export const setRdiLoading = () => {
  return {
    type: RDI_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
