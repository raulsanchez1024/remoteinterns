import React, { Component } from 'react';
import styled from "styled-components";
import Header from '../header/Header';

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

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories>
          <Category>
            <a href="/category/software">SOFTWARE</a>
          </Category>
          <Category>
            <a href="/category/marketing">MARKETING</a>
          </Category>
          <Category>
            <a href="/category/design">DESIGN</a>
          </Category>
          <Category>
            <a href="/category/top-companies">TOP-COMPANIES</a>
          </Category>
          <Category>
            <a href="/category/non-techy">NON-TECHY</a>
          </Category>
        </Categories>
        <HR />
      </div>
    )
  }
}

export default Landing;