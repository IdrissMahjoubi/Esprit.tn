import {
  GET_CLUBS,
  GET_CLUB,
  CLUB_LOADING,

} from "../actions/types";

const initialState = {
  clubs: [],
  club: {},
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLUB_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CLUBS:
      return {
        ...state,
        clubs: action.payload,
        loading: false
      };
    case GET_CLUB:
      return {
        ...state,
        club: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

