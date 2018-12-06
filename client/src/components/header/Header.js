import React, { Component } from "react";
import logoPNG from "../remoteinterns.png";
import styled from "styled-components";

import { Link } from "react-router-dom";

// Styles
import WhtBtn from "../styles/WhtBtn";
import OutlineBtn from "../styles/OutlineBtn";

const HeaderTop = styled.div`
  background: #373737;
  height: 400px;

  p {
    color: white;
  }

  .search {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 35px;

    p {
      display: flex;
      margin: auto;
      padding-bottom: 25px;
    }

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
    padding-top: 25px;
  }

  h1 {
    color: white;
    padding-top: 15px;
    padding-left: 20px;
  }

  .right {
    display: flex;
    margin-left: auto;
    padding-top: 25px;
  }

  @media(max-width: 800px) {
    img {
      display: none;
    }

    display: none;
  }
`;

const Search = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    background: #373737;
    border-radius: 5px;
    border: 3px white solid;
    color: white;
    font-size: 15px;
    height: 45px;
    width: 25%;
    position: relative;
    padding-left: 15px;
    outline: none;
  }

  i {
    position: absolute;
    top: 70px;
    left: 320px;
    color: white;
    font-size: 25px;
  }

  .form {
    display: flex;
    width: 80%;
    justify-content: center;

    a {
      color: #373737;
      margin-left: 15px;
      background: white;
      border-radius: 5px;
      font-weight: 700;
      text-align: center;
      padding-top: 15px;
      text-decoration: none;
      width: 75px;
    }
  }

  @media(max-width: 800px) {
    margin-top: 45px;

    input {
      width: 85%;
    }
  }

`;

const ResponsiveNav = styled.nav`
  flex-direction: row;
  width: 80%;
  margin: auto;
  display: none;
  color: white;

  .nav__right {
    display: flex;
    margin-left: auto;
  }

  .nav__right a {
    color: white;
    text-decoration: none;
    margin-top: 20px;
    border: 3px solid white;
    border-radius: 5px;
    width: 75px;
    height: 30px;
    text-align: center;
    padding-top: 5px;
    font-weight: 700;
}

  @media(max-width: 800px) {
    display: flex;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderTop>

        <ResponsiveNav>
          <div className="nav__left">
            <h1>RemoteInterns</h1>
          </div>
          <div className="nav__right">
            <a href="/">Post</a>
          </div>
        </ResponsiveNav>

        <Nav>
          <img src={logoPNG} alt="remoteinterns__logo" />
          <h1>RemoteInterns</h1>
          
          <div className="right">
            <WhtBtn>Contact</WhtBtn>
            <OutlineBtn>Post an Internship</OutlineBtn>
          </div>
        </Nav>

        <Search>
          <p className="jobtitle">Job Title</p>
          <div className="form">
            <input type="text" placeholder="Software Engineer" />
            <a href="/">Find</a>
          </div>
        </Search>

      </HeaderTop>
    );
  }
}

export default Header;
