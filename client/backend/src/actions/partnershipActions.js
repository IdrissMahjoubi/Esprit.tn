import axios from "../api";
import {
  ADD_PARTNERSHIP,
  GET_PARTNERSHIP,
  DELETE_PARTNERSHIP,
  PARTNERSHIP_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
  EDIT_PARTNERSHIP,
  GET_ALL_PARTNERSHIP
  // SEARCH_EVENT,
} from "./types";

export const addPartnership = (eventData) => dispatch => {
  dispatch(clearErrors());
  axios.post("/partnership/add", eventData)
    .then(res =>
        dispatch({
        type: ADD_PARTNERSHIP,
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




export const getAllPartnership = () => dispatch => {
  dispatch(setPartnershipLoading());
  axios
    .get("/partnership")
    .then(res => {
      dispatch({
        type: GET_ALL_PARTNERSHIP,
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

export const getPartnership = id => dispatch => {
  dispatch(setPartnershipLoading());
  axios
    .get(`/partnership/id/${id}`)
    .then(res =>
      dispatch({
        type: GET_PARTNERSHIP,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};



export const deletePartnership = id => dispatch => {
  dispatch(clearErrors());
  axios
    .delete(`/partnership/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PARTNERSHIP,
        payload: id
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

export const editPartnership = (eventData,id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/partnership/update/${id}`, eventData)
    .then(res =>
      dispatch({
        type: EDIT_PARTNERSHIP,
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


// Set loading state
export const setPartnershipLoading = () => {
  return {
    type: PARTNERSHIP_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
