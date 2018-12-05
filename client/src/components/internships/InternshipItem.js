import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;
  margin: auto;
  height: 55px;
  width: 80%;
  background-color: #E2E2E2;
  padding-bottom: 105px;
  box-shadow: #CFCFCF 2px 3px;
  
  :hover {
    transition-duration: 0.5s;
    height: 60px;
    width: 81%;
  }

  h1 {
    padding-left: 15px;
    padding-top: 15px;
  }

  h2 {
    padding-left: 15px;
    margin-top: -20px;
  }

  h3 {
    padding-left: 15px;
  }
`;

class InternshipItem extends Component {
  render() {
    const { internship } = this.props;
    return (
      <Container>
        <h1><a href={`http://${internship.applyurl}`}>{ internship.companyname }</a></h1>
        <h2>{ internship.position }</h2>
        <h3>{ internship.basedfrom }</h3>
      </Container>
    )
  }
}

export default InternshipItem;