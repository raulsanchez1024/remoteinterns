import {
  GET_INTERNSHIPS,
  ADD_INTERNSHIP,
  GET_PROMOTED_INTERNSHIPS,
  GET_SEARCHED_INTERNSHIPS,
  GET_INTERNSHIPS_BY_TAG
} from "../actions/types";

const initialState = {
  internships: [],
  internship: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INTERNSHIPS:
      return {
        ...state,
        internships: action.payload,
        loading: false
      };
    case ADD_INTERNSHIP:
      return {
        ...state,
        internships: [action.payload, ...state.internships]
      };
    case GET_SEARCHED_INTERNSHIPS:
      return {
        ...state,
        internships: action.payload,
        loading: false
      };
    case GET_INTERNSHIPS_BY_TAG:
      return {
        ...state,
        internships: action.payload,
        loading: false
      };
    default:
      return state;
  }
};