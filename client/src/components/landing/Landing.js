import React, { Component } from 'react';

import Header from '../header/Header';

// Import Internships
import Internships from "../internships/Internships";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Internships />
      </div>
    )
  }
}

export default Landing;