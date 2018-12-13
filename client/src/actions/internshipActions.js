import axios from "axios";

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
} from "./types";

export const addInternship = internshipData => dispatch => {
  axios
    .post("/api/internships/post", internshipData)
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

export const getSoftware = () => dispatch => {
  axios
    .get(`/api/internships/software`)
    .then(res => 
      dispatch({
        type: GET_SOFTWARE,
        payload: res.data  
      })
    )
    .catch(err => console.log(err));
};

export const getMarketing = () => dispatch => {
  axios
    .get(`/api/internships/marketing`)
    .then(res => 
      dispatch({
        type: GET_MARKETING,
        payload: res.data  
      })
    )
    .catch(err => console.log(err));
};

export const getDesign = () => dispatch => {
  axios
    .get(`/api/internships/design`)
    .then(res => 
      dispatch({
        type: GET_DESIGN,
        payload: res.data  
      })
    )
    .catch(err => console.log(err));
};

export const getTopCompanies = () => dispatch => {
  axios
    .get(`/api/internships/top-companies`)
    .then(res => 
      dispatch({
        type: GET_TOP_COMPANIES,
        payload: res.data  
      })
    )
    .catch(err => console.log(err));
};

export const getNonTechy = () => dispatch => {
  axios
    .get(`/api/internships/non-techy`)
    .then(res => 
      dispatch({
        type: GET_NON_TECHY,
        payload: res.data  
      })
    )
    .catch(err => console.log(err));
};

