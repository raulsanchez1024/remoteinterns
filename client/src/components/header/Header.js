import React, { Component } from "react";
import logoPNG from "../remoteinterns.png";
import styled from "styled-components";

const HeaderTop = styled.div`
  background: #373737;
  height: 400px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  height: 15%;
`;

const LogoFont = styled.h1`
  color: white;
`;

class Header extends Component {
  render() {
    return (
      <HeaderTop>
        <Nav>
          <img src={logoPNG} />
          <LogoFont>RemoteInterns</LogoFont>
        </Nav>
      </HeaderTop>
    );
  }
}

export default Header;
