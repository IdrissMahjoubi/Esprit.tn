import axios from "../api";
import {
  GET_PARTNERS,
  GET_PARTNER,
  PARTNERS_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
} from "./types";

export const getPartners = () => dispatch => {
  dispatch(setPartnerLoading());
  axios
    .get("/partnership/")
    .then(res => {

      dispatch({
        type: GET_PARTNERS,
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

export const getPartner = id => dispatch => {
  dispatch(setPartnerLoading());
  axios
    .get(`/partnership/${id}`)
    .then(res => {
      dispatch({
        type: GET_PARTNER,
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
export const setPartnerLoading = () => {
  return {
    type: PARTNERS_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
