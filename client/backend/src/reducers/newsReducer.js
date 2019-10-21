import {
	ADD_SINGLE_NEWS,
	GET_NEWS,
	GET_SINGLE_NEWS,
	DELETE_SINGLE_NEWS,
	NEWS_LOADING,
	EDIT_SINGLE_NEWS,
	UNARCHIVE_SINGLE_NEWS,
	ARCHIVE_SINGLE_NEWS,
	IS_MODIFIED_SINGLE_NEWS
  } from "../actions/types";
  
  const initialState = {
	news: [],
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
		case IS_MODIFIED_SINGLE_NEWS:
		  return {
			...state,
			isModified:false
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
	  case ADD_SINGLE_NEWS:
		return {
		  ...state,
		  news: [...state.news,action.payload],
		  singleNews: action.payload
		};
	  case EDIT_SINGLE_NEWS:
		return {
		  ...state,
		  isModified:true,
		  news: state.news.map((singleNews) => singleNews._id === action.payload._id ? singleNews = action.payload : singleNews)
		};
	  case DELETE_SINGLE_NEWS:
		return {
		  ...state,
		  news: state.news.filter(singleNews => singleNews._id !== action.payload),
		};
	  case UNARCHIVE_SINGLE_NEWS: 
	  return {
		...state,
		news: state.news.map((singleNews) => singleNews._id === action.payload._id ? singleNews = action.payload : singleNews)
	  };
	  case ARCHIVE_SINGLE_NEWS: 
	  return {
		...state,
		news: state.news.map((singleNews) => singleNews._id === action.payload._id ? singleNews = action.payload : singleNews)
	  };
	  default:
		return state;
	}
  }
  
  