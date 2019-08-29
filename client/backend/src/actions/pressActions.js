import axios from "../api";
import {
  ADD_PRESS,
  GET_ALL_PRESS,
  GET_PRESS,
  GET_ARCHIVED,
  DELETE_PRESS,
  PRESS_LOADING,
  CLEAR_ERRORS,
  GET_ERRORS,
  EDIT_PRESS,
  ARCHIVE_PRESS,
  UNARCHIVE_PRESS,
  IS_MODIFIED_PRESS
  // SEARCH_EVENT,
} from "../actions/types";

export const addPress = (eventData) => dispatch => {
  dispatch(clearErrors());
  axios.post("/press/add", eventData)
    .then(res =>
        dispatch({
        type: ADD_PRESS,
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

export const archivePress = (id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/press/archive/${id}`)
    .then(res =>
      dispatch({
        type: ARCHIVE_PRESS,
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

export const unarchivePress = (id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/press/unarchive/${id}`)
    .then(res =>
      dispatch({
        type: UNARCHIVE_PRESS,
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
    .get(`/press/get/${id}`)
    .then(res =>
      dispatch({
        type: GET_PRESS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};



export const deletePress = id => dispatch => {
  dispatch(clearErrors());
  axios
    .delete(`/press/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PRESS,
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

export const editPress = (eventData,id) => dispatch => {
  dispatch(clearErrors());
  axios.put(`/press/update/${id}`, eventData)
    .then(res =>
      dispatch({
        type: EDIT_PRESS,
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

export const setIsModifiedPressLoading = () => {
  return {
    type: IS_MODIFIED_PRESS
  };
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
