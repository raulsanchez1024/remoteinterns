import React, { Component } from 'react';
import InternshipItem from './InternshipItem';

class InternshipFeed extends Component {
  render() {
    const { internships } = this.props;

    return(
       internships.map(internship => <InternshipItem key={internship._id} internship={internship} />)
    )
  }
}

export default InternshipFeed;