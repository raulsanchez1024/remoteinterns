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
    span {
      font-size: 50px;
      text-align: center;
    }
`;

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />

        <Categories>
          <Category>
            <span>💻</span>
            SOFTWARE
          </Category>

          <Category>
            <span>🌍</span>
            MARKETING
          </Category>

          <Category>
            <span>🎨</span>
            DESIGN
          </Category>

          <Category>
            <span>🤑</span>
            SALES
          </Category>

          <Category>
            <span>👔</span>
            NON-TECHY
          </Category>
        </Categories>

        <Internships />
      </div>
    )
  }
}

export default Landing;