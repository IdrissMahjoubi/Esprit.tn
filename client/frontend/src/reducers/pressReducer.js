import {
    GET_PRESS,
    GET_ARCHIVED,
    PRESS_LOADING,
    GET_COMMUNIQUES,
    GET_BROCHURES,
    GET_ARTICLES,
    GET_RAPPORTS,
  } from "../actions/types";
  
  const initialState = {
    allPress: [],
    articles :[],
    rapports :[],
    brochures :[],
    communiques :[],
    press: {},
    loading: false,
    search: [],
    searching :false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case PRESS_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_ARTICLES:
        return {
          ...state,
          articles: action.payload,
          //loading: false
        };
      case GET_BROCHURES:
        return {
          ...state,
          brochures: action.payload,
          //loading: false
        };
      case GET_COMMUNIQUES:
        return {
          ...state,
          communiques: action.payload,
          //loading: false
        };
      case GET_RAPPORTS:
        return {
          ...state,
          rapports: action.payload,
          //loading: false
        };
        case GET_ARCHIVED:
          return {
            ...state,
            allPress: action.payload,
            loading: false
          };
      case GET_PRESS:
        return {
          ...state,
          press: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }