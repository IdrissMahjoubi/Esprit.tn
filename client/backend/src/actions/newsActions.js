import axios from '../api';
import {
  ADD_SINGLE_NEWS,
  GET_NEWS,
  GET_SINGLE_NEWS,
  DELETE_SINGLE_NEWS,
  CLEAR_ERRORS,
  NEWS_LOADING,
  GET_ERRORS,
  EDIT_SINGLE_NEWS,
  UNARCHIVE_SINGLE_NEWS,
  ARCHIVE_SINGLE_NEWS,
  IS_MODIFIED_SINGLE_NEWS
} from '../actions/types';

export const addNews = newsData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/news/add', newsData)
    .then(res =>
      dispatch({
        type: ADD_SINGLE_NEWS,
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
        });
      }
    });
};

export const editNews = (newsData, id) => dispatch => {
  dispatch(clearErrors());
  axios
    .put(`/news/update/${id}`, newsData)
    .then(res => {
      dispatch({
        type: EDIT_SINGLE_NEWS,
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
        });
      }
    });
};

export const archiveNews = id => dispatch => {
  dispatch(clearErrors());
  axios
    .put(`/news/archive/${id}`)
    .then(res =>
      dispatch({
        type: ARCHIVE_SINGLE_NEWS,
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
        });
      }
    });
};

export const unarchiveNews = id => dispatch => {
  dispatch(clearErrors());
  axios
    .put(`/news/unarchive/${id}`)
    .then(res =>
      dispatch({
        type: UNARCHIVE_SINGLE_NEWS,
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
        });
      }
    });
};

export const getNews = () => dispatch => {
  dispatch(setNewsLoading());
  axios
    .get('/news/')
    .then(res => {
      dispatch({
        type: GET_NEWS,
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
        });
      }
    });
};

export const getSingleNews = id => dispatch => {
  dispatch(setNewsLoading());
  axios
    .get(`/news/${id}`)
    .then(res =>
      dispatch({
        type: GET_SINGLE_NEWS,
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
        });
      }
    });
};

export const deleteNews = id => dispatch => {
  dispatch(clearErrors());
  axios
    .delete(`/news/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SINGLE_NEWS,
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
        });
      }
    });
};

// Set loading state
export const setNewsLoading = () => {
  return {
    type: NEWS_LOADING
  };
};
export const setIsModifiedNewsLoading = () => {
  return {
    type: IS_MODIFIED_SINGLE_NEWS
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
