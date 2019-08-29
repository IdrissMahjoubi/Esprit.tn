import {
  ADD_PRESS,
  GET_PRESS,
  GET_ARCHIVED,
  GET_ALL_PRESS,
  DELETE_PRESS,
  PRESS_LOADING,
  SEARCH_PRESS,
  EDIT_PRESS,
  ARCHIVE_PRESS,
  UNARCHIVE_PRESS,
  IS_MODIFIED_PRESS
} from '../actions/types';

const initialState = {
  allPress: [],
  press: {},
  loading: false,
  search: [],
  searching: false,
  isModified: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRESS_LOADING:
      return {
        ...state,
        loading: true
      };
      case IS_MODIFIED_PRESS:
        return {
          ...state,
          isModified:false
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
    case ADD_PRESS:
      return {
        ...state,
        allPress: [...state.allPress, action.payload],
        press: action.payload
      };
    case EDIT_PRESS:
      return {
        ...state,
        isModified: true,
        allPress: state.allPress.map((press) => press._id === action.payload._id ? press = action.payload : press),
        press: action.payload
      };
      case UNARCHIVE_PRESS: 
    return {
      ...state,
      allPress: state.allPress.map((press) => press._id === action.payload._id ? press = action.payload : press)
    };
    case ARCHIVE_PRESS: 
    return {
      ...state,
      allPress: state.allPress.map((press) => press._id === action.payload._id ? press = action.payload : press)
    };
    case DELETE_PRESS:
      return {
        ...state,
        allPress: state.allPress.filter(press => press._id !== action.payload)
      };

    case SEARCH_PRESS:
      return {
        ...state,
        search: action.payload.allPress,
        searching: action.payload.searching
      };
    default:
      return state;
  }
}
