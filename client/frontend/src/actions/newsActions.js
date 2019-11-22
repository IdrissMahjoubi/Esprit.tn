import axios from '../api';
import {
  GET_NEWS,
  GET_SINGLE_NEWS,
  CLEAR_ERRORS,
  NEWS_LOADING,
  GET_ERRORS,
  GET_HOME_NEWS,
} from '../actions/types';


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

export const getHomeNews = () => dispatch => {
  dispatch(setNewsLoading());
  axios
    .get('/news/homeNews')
    .then(res => {
      dispatch({
        type: GET_HOME_NEWS,
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


// Set loading state
export const setNewsLoading = () => {
  return {
    type: NEWS_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
