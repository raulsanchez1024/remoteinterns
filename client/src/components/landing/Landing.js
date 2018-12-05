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
    font-family: 'Poppins', sans-serif;
    font-weight: 700;

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

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />

        <Categories>
          <Category>
            <a href="/">
              <span>💻</span> <br/> SOFTWARE
            </a>
          </Category>

          <Category>
            <a href="/">
              <span>🌍</span> <br/> MARKETING
            </a>
          </Category>

          <Category>
            <a href="/">
              <span>🎨</span> <br/> DESIGN
            </a>
          </Category>

          <Category>
            <a href="/">
              <span>🤑</span> <br/> SALES
            </a>
          </Category>

          <Category>
            <a href="/">
              <span>👔</span> <br/> NON-TECHY
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