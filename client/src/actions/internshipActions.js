import axios from "axios";

import {
  GET_INTERNSHIPS,
  ADD_INTERNSHIP,
  GET_PROMOTED_INTERNSHIPS,
  GET_SEARCHED_INTERNSHIPS,
  GET_INTERNSHIPS_BY_TAG
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

export const getSearchedInternships = search => dispatch => {
  axios
    .get(`/api/internships/search/${search}`)
    .then(res => 
      dispatch({
        type: GET_SEARCHED_INTERNSHIPS,
        payload: res.data  
      })
    )
    .catch(err => console.log(err));
};

export const getInternshipsByTag = tag => dispatch => {
  axios
    .get(`/api/internships/tag/${tag}`)
    .then(res => 
      dispatch({
        type: GET_INTERNSHIPS_BY_TAG,
        payload: res.data  
      })
    )
    .catch(err => console.log(err));
};