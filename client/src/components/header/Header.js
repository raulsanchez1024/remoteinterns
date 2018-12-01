import React, { Component } from "react";
import logoPNG from "../remoteinterns.png";
import styled from "styled-components";

import { Link } from 'react-router-dom';

// Styles
import WhtBtn from "../styles/WhtBtn";
import OutlineBtn from "../styles/OutlineBtn";

const HeaderTop = styled.div`
  background: #373737;
  height: 400px;
  p {
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
  h1 {
    color: white;
  }
`;

const Search = styled.input`
  background: #373737;
  border-radius: 5px;
  border: 3px white solid;
  color: white;
  font-size: 15px;
  height: 45px;
  width: 25%;
`;

class Header extends Component {
  render() {
    return (
      <HeaderTop>
        <Nav>
          <img src={logoPNG} />
          <h1>RemoteInterns</h1>

          <WhtBtn>Contact</WhtBtn>
          <OutlineBtn>Post an Internship</OutlineBtn>
        </Nav>

        <p>Job Title</p>
        <Search placeholder="Software Engineer" />
      </HeaderTop>
    );
  }
}

export default Header;
