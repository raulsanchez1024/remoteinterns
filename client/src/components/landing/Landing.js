import React, { Component } from 'react';
import styled from "styled-components";

import Header from '../header/Header';

// Import Internships
import Internships from "../internships/Internships";

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 40%;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Category = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 75px;
    margin-top: 25px;
    margin-bottom: 25px;
    font-weight: 700;
    width: 100%

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
    margin-bottom: 60px;
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
            <a href="/">
            <i className="fas fa-code" style={iconStyle}></i>SOFTWARE
            </a>
          </Category>

          <Category>
            <a href="/">
            <i className="fas fa-chart-line" style={iconStyle}></i>MARKETING
            </a>
          </Category>

          <Category>
            <a href="/">
            <i className="fas fa-palette" style={iconStyle}></i><br/>DESIGN
            </a>
          </Category>

          <Category>
            <a href="/">
            <i className="fas fa-trophy" style={iconStyle}></i>TOP-COMPANIES
            </a>
          </Category>

          <Category>
            <a href="/">
            <i className="fas fa-user-tie" style={iconStyle}></i>NON-TECHY
            </a>
          </Category>

        </Categories>

        <HR />

        <Internships />
      </div>
    )
  }
}

export default Landing;