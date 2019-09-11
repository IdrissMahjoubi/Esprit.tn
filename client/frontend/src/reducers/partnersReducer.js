import {
  GET_PARTNERS,
  GET_PARTNER,
  PARTNERS_LOADING
  } from "../actions/types";
  
  const initialState = {
    partners: [],
    partner: {},
    loading: false,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case PARTNERS_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_PARTNERS:
        return {
          ...state,
          partners: action.payload,
          loading: false
        };
      case GET_PARTNER:
        return {
          ...state,
          partner: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }
  
  