import {
	GET_NEWS,
	GET_SINGLE_NEWS,
	NEWS_LOADING,
	GET_HOME_NEWS,
  } from "../actions/types";
  
  const initialState = {
	  news: [],
	  homeNews: [],
	singleNews: {},
	loading: false,
	search: [],
	searching: false,
	isModified:false
  };
  
  export default function(state = initialState, action) {
	switch (action.type) {
	  case NEWS_LOADING:
		return {
		  ...state,
		  loading: true
		};
	  case GET_NEWS:
		return {
		  ...state,
		  news: action.payload,
		  loading: false
		};
	  case GET_SINGLE_NEWS:
		return {
		  ...state,
		  singleNews: action.payload,
		  loading: false
		};

	  case GET_HOME_NEWS: 
	  return {
		  ...state,
		  homeNews: action.payload,
		  loading: false
	  };
	  default:
		return state;
	}
  }
  
  