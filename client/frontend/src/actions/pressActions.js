import axios from "../api";
import {
  GET_PRESS,
  GET_ARCHIVED,
  PRESS_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
  GET_COMMUNIQUES,
  GET_BROCHURES,
  GET_ARTICLES,
  GET_RAPPORTS, 
} from "../actions/types";

export const getAllPress = () => dispatch => {
  //dispatch(setPressLoading());
  axios
    .get("/press/getPressBy/communique")
    .then(res => {
      dispatch({
        type: GET_COMMUNIQUES,
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
    axios
    .get("/press/getPressBy/rapport")
    .then(res => {
      dispatch({
        type: GET_RAPPORTS,
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
    axios
    .get("/press/getPressBy/article")
    .then(res => {
      dispatch({
        type: GET_ARTICLES,
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
    axios
    .get("/press/getPressBy/brochure")
    .then(res => {
      dispatch({
        type: GET_BROCHURES,
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
