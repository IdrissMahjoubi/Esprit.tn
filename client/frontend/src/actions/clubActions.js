import axios from "../api";
import {
  GET_CLUBS,
  GET_CLUB,
  CLUB_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
} from "./types";

export const getClubs = () => dispatch => {
  dispatch(setClubLoading());
  axios
    .get("/club/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_CLUBS,
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

export const getClub = id => dispatch => {
  dispatch(setClubLoading());
  axios
    .get(`/club/${id}`)
    .then(res => {
      dispatch({
        type: GET_CLUB,
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
export const setClubLoading = () => {
  return {
    type: CLUB_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
