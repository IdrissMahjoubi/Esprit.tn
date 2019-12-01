import {
    GET_PRESS,
    GET_ARCHIVED,
    GET_ALL_PRESS,
    PRESS_LOADING,
  } from "../actions/types";
  
  const initialState = {
    allPress: [],
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
      case GET_ALL_PRESS:
        return {
          ...state,
          allPress: action.payload,
          loading: false
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