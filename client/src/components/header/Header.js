import React, { Component } from "react";
import logoPNG from "../remoteinterns.png";
import { history } from "../../App";
import styled from "styled-components";

import Modal from "react-modal";

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

  a {
    text-decoration: none;
  }

  h1 {
    color: white;
    padding-top: 15px;
    padding-left: 20px;
    transition-duration: 1s;
  }

  h1:hover {
    color: grey;
    transition: all 1s ease;
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

  .nav__left .nav__logo {
    text-decoration: none;
  }

  .nav__left .nav__logo h1 {
    color: white;
  }

  @media(max-width: 800px) {
    display: flex;
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      modalIsOpen: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    history.push(`/search/${this.state.search}`);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <HeaderTop>

        <ResponsiveNav>
          <div className="nav__left">
            <a href="/" className="nav__logo"><h1>RemoteInterns</h1></a>
          </div>
          <div className="nav__right">
            <a href="#" onClick={this.openModal}>Post</a>
          </div>
        </ResponsiveNav>

        <Nav>
          <a href="/"><img src={logoPNG} alt="remoteinterns__logo" /></a>
          <a href="/"><h1>RemoteInterns</h1></a>
          
          <div className="right">
            <WhtBtn href="mailto:raulsanchez1024@gmail.com">Contact</WhtBtn>
            <OutlineBtn href="#" onClick={this.openModal}>Post an Internship</OutlineBtn>
          </div>
        </Nav>

        <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          portalClassName="modal"
          className="Modal"
          overlayClassName="Overlay"
          contentLabel="Example Modal"
        >
          <div className="close">
            <a href="#" onClick={this.closeModal} className="x">✕</a>
          </div>

          <div className="form__title">
            <h3>Post an Internship</h3>
            <p>$29 per post for one week of top frontpage placement</p>
          </div>

          <form className="form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="internships@google.com" />
            <label htmlFor="position">Position</label>
            <input type="text" name="position" placeholder="Software Engineer Intern" />
            <label htmlFor="company">Company</label>
            <input type="text" name="company" placeholder="Google" />
            <label htmlFor="basedfrom">Based From</label>
            <input type="text" name="basedfrom" placeholder="Earth, Prague" />
            <label htmlFor="category">Category</label>
            <select name="category" id="">
              <option value="software">Software</option>
              <option value="marketing">Marketing</option>
              <option value="design">Design</option>
              <option value="top-companies">Top Company</option>
              <option value="non-techy">Non-Techy</option>
            </select>
            <label htmlFor="extratags">Three keywords that best describe this position</label>
            <input type="text" name="extratags" placeholder="React.js, Node.js, SCSS" />
            <label htmlFor="salary">Salary</label>
            <input type="text" name="salary" placeholder="$25/hr" />
            <label htmlFor="locationrestrictions">Location Restriction</label>
            <input type="text" name="locationrestrictions" placeholder="Must be US citizen" />
            <label htmlFor="description">Description</label>
            <textarea name="description" cols="30" rows="10"></textarea>
            <label htmlFor="requirements">Requirements</label>
            <textarea name="requirements" cols="30" rows="10"></textarea>
            <label htmlFor="applyurl">Apply URL</label>
            <input type="text" name="applyurl" placeholder="https://google.com/internship0023" />

            <p className="promo__info">Once submitted we will send you an invoice of <strong>$29</strong> to your email. When paid, your post will be placed at the top of the frontpage for one week.</p>

            <button type="submit">Submit</button>
          </form>

        </Modal>

        <Search>
          <p className="jobtitle">Job Title</p>
          <form className="form" onSubmit={this.onSubmit}>
            <input 
              type="text" 
              placeholder="Software Engineer" 
              onChange={this.onChange} 
              name="search"
              value={this.state.search}
            />
            <a type="submit" href={`/search/${this.state.search}`} >Find</a>
          </form>
        </Search>

      </HeaderTop>
    );
  }
}

export default Header;
