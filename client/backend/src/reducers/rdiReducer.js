import {
  ADD_RDI,
  GET_RDI,
  DELETE_RDI,
  RDI_LOADING,
  SEARCH_RDI,
  EDIT_RDI,
  GET_ALL_RDI,
  IS_MODIFIED_RDI
} from '../actions/types';

const initialState = {
  allRdi: [],
  rdi: {},
  loading: false,
  search: [],
  searching: false,
  isModified: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RDI_LOADING:
      return {
        ...state,
        loading: true
      };
      case IS_MODIFIED_RDI:
        return {
          ...state,
          isModified:false
        };
      case GET_ALL_RDI:
      return {
        ...state,
        allRdi: action.payload,
        loading: false
      };
    case GET_RDI:
      return {
        ...state,
        rdi: action.payload,
        loading: false
      };
    case ADD_RDI:
      return {
        ...state,
        allRdi: [...state.allRdi, action.payload],
        rdi: action.payload
      };
    case EDIT_RDI:
      return {
        ...state,
        isModified: true,
        allRdi: state.allRdi.map((rdi) => rdi._id === action.payload._id ? rdi = action.payload : rdi)
      };
    case DELETE_RDI:
      return {
        ...state,
        allRdi: state.allRdi.filter(rdi => rdi._id !== action.payload)
      };

    case SEARCH_RDI:
      return {
        ...state,
        search: action.payload.allRdi,
        searching: action.payload.searching
      };
    default:
      return state;
  }
}
