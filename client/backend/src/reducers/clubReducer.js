import {
  ADD_CLUB,
  GET_CLUB,
  DELETE_CLUB,
  CLUB_LOADING,
  EDIT_CLUB,
  GET_ALL_CLUB,
  IS_MODIFIED_CLUB
} from '../actions/types';

const initialState = {
  allClub: [],
  club: {},
  loading: false,
  search: [],
  searching: false,
  isModified: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLUB_LOADING:
      return {
        ...state,
        loading: true
      };
      case IS_MODIFIED_CLUB:
        return {
          ...state,
          isModified:false
        };
      case GET_ALL_CLUB:
      return {
        ...state,
        allClub: action.payload,
        loading: false,
        isModified:false
      };
    case GET_CLUB:
      return {
        ...state,
        club: action.payload,
        loading: false
      };
    case ADD_CLUB:
      return {
        ...state,
        allClub: [...state.allClub, action.payload],
        club: action.payload
      };
    case EDIT_CLUB:
      return {
        ...state,
        isModified: true,
        allClub: state.allClub.map((club) => club._id === action.payload._id ? club = action.payload : club),
        club: action.payload
      };
    case DELETE_CLUB:
      return {
        ...state,
        allClub: state.allClub.filter(club => club._id !== action.payload)
      };
    default:
      return state;
  }
}
