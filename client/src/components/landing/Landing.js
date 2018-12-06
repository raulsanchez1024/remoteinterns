import React, { Component } from 'react';
import styled from "styled-components";

import Header from '../header/Header';

// Import Internships
import Internships from "../internships/Internships";

const Categories = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: center;
`;

const Category = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 700;
    font-size: 10px;
    align-items: center;
    padding: 0 10px 0 ;

    span {
      font-size: 50px;
    }

    a {
      text-decoration: none;
      color: #727272;
    }

    a:hover {
      color: #373737;
    }
`;

const HR = styled.hr`
    width: 60%;
    margin-bottom: 45px;
`;

const iconStyle = {
  fontSize: "55px",
  marginLeft: "15px"
};

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />

        <Categories>
          <Category>
            <a href="/">SOFTWARE</a>
          </Category>

          <Category>
            <a href="/">MARKETING</a>
          </Category>

          <Category>
            <a href="/">DESIGN</a>
          </Category>

          <Category>
            <a href="/">TOP-COMPANIES</a>
          </Category>

          <Category>
            <a href="/">NON-TECHY</a>
          </Category>

        </Categories>

        <HR />

        <Internships />
      </div>
    )
  }
}

export default Landing;