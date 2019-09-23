import {
  GET_RDIS,
  GET_RDI,
  RDI_LOADING,

} from "../actions/types";

const initialState = {
  rdis: [],
  rdi: {},
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RDI_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_RDIS:
      return {
        ...state,
        rdis: action.payload,
        loading: false
      };
    case GET_RDI:
      return {
        ...state,
        rdi: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

