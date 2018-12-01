import {
  GET_INTERNSHIPS,
  ADD_INTERNSHIP,
  GET_PROMOTED_INTERNSHIPS
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
    default:
      return state;
  }
};