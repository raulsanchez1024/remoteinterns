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
`;

class InternshipItem extends Component {
  render() {
    const { internship } = this.props;
    return (
      <Container>
        <h1>{ internship.companyname }</h1>
        <h2>{ internship.position }</h2>
      </Container>
    )
  }
}

export default InternshipItem;