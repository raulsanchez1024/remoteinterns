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
`;

const Search = styled.input`
  background: #373737;
  background-image: url("../search.png") no-repeat scroll 1px 1px;
  border-radius: 5px;
  border: 3px white solid;
  color: white;
  font-size: 15px;
  height: 45px;
  display: flex;
  margin: auto;
  padding-left: 10px;
  width: 25%;
`;

const S = styled.div`
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

  }
  i {
    position: absolute;
    top: 70px;
    left: 320px;
    color: white;
    font-size: 25px;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderTop>
        <Nav>
          <img src={logoPNG} />
          <h1>RemoteInterns</h1>
          
          <div className="right">
            <WhtBtn>Contact</WhtBtn>
            <OutlineBtn>Post an Internship</OutlineBtn>
          </div>
        </Nav>

        <S>
          <p>Job Title</p>
          <i class="fa fa-search icon"></i>
          <input class="input-field" type="text" placeholder="Software Engineer" name="usrnm" />
        </S>

      </HeaderTop>
    );
  }
}

export default Header;
