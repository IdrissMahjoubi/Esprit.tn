import axios from "../api";
import {
  ADD_RDI,
  GET_RDI,
  DELETE_RDI,
  RDI_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
  EDIT_RDI,
  GET_ALL_RDI
  // SEARCH_EVENT,
} from "./types";

export const addRdi = (eventData) => dispatch => {
  dispatch(clearErrors());
  axios.post("/rdi/add", eventData)
    .then(res =>
        dispatch({
        type: ADD_RDI,
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




export const getAllRdi = () => dispatch => {
  dispatch(setRdiLoading());
  axios
    .get("/rdi")
    .then(res => {
      dispatch({
        type: GET_ALL_RDI,
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
    .get(`/rdi/id/${id}`)
    .then(res =>
      dispatch({
        type: GET_RDI,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};



export const deleteRdi = id => dispatch => {
  dispatch(clearErrors());
  axios
    .delete(`/rdi/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_RDI,
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

export const editRdi = (eventData,id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/rdi/update/${id}`, eventData)
    .then(res =>
      dispatch({
        type: EDIT_RDI,
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
