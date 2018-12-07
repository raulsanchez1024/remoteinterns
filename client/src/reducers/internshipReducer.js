import {
  GET_INTERNSHIPS,
  ADD_INTERNSHIP,
  GET_SEARCHED_INTERNSHIPS,
  GET_INTERNSHIPS_BY_TAG,
  GET_SOFTWARE,
  GET_MARKETING,
  GET_DESIGN,
  GET_TOP_COMPANIES,
  GET_NON_TECHY
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
    case GET_SOFTWARE:
      return {
        ...state,
        internships: action.payload,
        loading: false
      };
    case GET_MARKETING:
      return {
        ...state,
        internships: action.payload,
        loading: false
      };
    case GET_DESIGN:
      return {
        ...state,
        internships: action.payload,
        loading: false
      };
    case GET_TOP_COMPANIES:
      return {
        ...state,
        internships: action.payload,
        loading: false
      };
    case GET_NON_TECHY:
      return {
        ...state,
        internships: action.payload,
        loading: false
      };
    default:
      return state;
  }
};