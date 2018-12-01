import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class InternshipItem extends Component {
  render() {
    const { internship } = this.props;
    return (
      <div>
        <h1>{ internship.companyname }</h1>
        <h2>{ internship.position }</h2>
      </div>
    )
  }
}

export default InternshipItem;