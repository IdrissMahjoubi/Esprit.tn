import {
  ADD_PARTNERSHIP,
  GET_PARTNERSHIP,
  DELETE_PARTNERSHIP,
  PARTNERSHIP_LOADING,
  SEARCH_PARTNERSHIP,
  EDIT_PARTNERSHIP,
  GET_ALL_PARTNERSHIP
} from '../actions/types';

const initialState = {
  allPartnership: [],
  partnership: {},
  loading: false,
  search: [],
  searching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PARTNERSHIP_LOADING:
      return {
        ...state,
        loading: true
      };
      case GET_ALL_PARTNERSHIP:
      return {
        ...state,
        allPartnership: action.payload,
        loading: false
      };
    case GET_PARTNERSHIP:
      return {
        ...state,
        partnership: action.payload,
        loading: false
      };
    case ADD_PARTNERSHIP:
      return {
        ...state,
        allPartnership: [...state.allPartnership, action.payload],
        partnership: action.payload
      };
    case EDIT_PARTNERSHIP:
      return {
        ...state,
        allPartnership: state.allPartnership.map((partnership) => partnership._id === action.payload._id ? partnership = action.payload : partnership)
      };
    case DELETE_PARTNERSHIP:
      return {
        ...state,
        allPartnership: state.allPartnership.filter(partnership => partnership._id !== action.payload)
      };

    case SEARCH_PARTNERSHIP:
      return {
        ...state,
        search: action.payload.allPartnership,
        searching: action.payload.searching
      };
    default:
      return state;
  }
}
