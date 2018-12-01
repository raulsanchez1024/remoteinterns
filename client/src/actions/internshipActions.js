import axios from "axios";

import {
  GET_INTERNSHIPS,
  ADD_INTERNSHIP,
  GET_PROMOTED_INTERNSHIPS
} from "./types";

export const addInternship = internshipData => dispatch => {
  axios
    .post("/api/internships")
    .then(res =>
      dispatch({
        type: ADD_INTERNSHIP,
        payload: res.data
      })
    );
    // TODO: add GET_ERRORS
};

export const getInternships = () => dispatch => {
  axios
    .get("/api/internships")
    .then(res => 
      dispatch({
        type: GET_INTERNSHIPS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};