import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getInternships } from '../../actions/internshipActions';
import InternshipFeed from './InternshipFeed';

import styled from "styled-components";

const Feed = styled.div`
    /* display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto; */
`;

class Internships extends Component {
    componentDidMount () {
      this.props.getInternships();
    }

  render() {
    const { internships, loading } = this.props.internship;
    let content;

    if (internships === null || loading) {
      content = <h1>NONE</h1>;
    } else {
      content = <InternshipFeed internships={internships} />;
    }

    return (
      <Feed>
        { content }
      </Feed>
    )
  }
}

const mapStateToProps = state => ({
  internship: state.internship
});

export default connect(mapStateToProps, { getInternships })(Internships);