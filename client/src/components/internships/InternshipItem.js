import React, { Component } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import "./modal.css";

const HrStyle = {
  width: "75%"
}

const Container = styled.div`
  display: flex;
  border-radius: 5px;
  margin: auto;
  height: 100px;
  width: 80%;
  background-color: #e2e2e2;
  box-shadow: #cfcfcf 2px 3px;
  transition-duration: 0.5s;
  margin-bottom: 25px;

  .col1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    /* background: blue; */
    width: 20%;
  }
  .col2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background: orange; */
    width: 60%;
  }
  .col3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background: red; */
    width: 20%;
  }

  :hover {
    transition-duration: 0.5s;
    height: 105px;
    width: 81%;

    .apply {
      display: block;
    }

    .exp {
      display: none;
    }
  }

  .apply {
    background: #373737;
    border-radius: 5px;
    border: 3px solid #373737;
    padding: 5px;
    margin-right: 10px;
    text-decoration: none;
    color: #e2e2e2;
    display: none;
    width: 100px;
    text-align: center;
  }

  h1 {
    padding-left: 15px;
    padding-top: 15px;
  }

  h2 {
    padding-left: 15px;
    margin-top: 15px;
    padding-bottom: 10px;
    font-size: 15px;

    a {
      text-decoration: none;
      color: #373737;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  h5 {
    margin-top: -25px;
    font-weight: 300;
    padding-left: 15px;

    a {
      text-decoration: none;
      color: #373737;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  @media(max-width: 600px) {
    flex-direction: column;
    height: 300px;

    .col1 {
      width: 100%;
      margin-top: 25px;
    }

    .col2 {
      width: 100%;
    }

    .col3 {
      width: 100%;
      flex-direction: column;
    }

    .apply {
      display: block;
    }

    :hover {
      height: 305px;
      width: 82%;

      .exp {
       display: block;
      }
      
    }
  }
`;

const Tag = styled.a`
  border-radius: 5px;
  border: 3px solid #373737;
  padding: 5px;
  margin-right: 10px;
  text-decoration: none;
  color: #373737;

  :hover {
    background: #373737;
    color: #e2e2e2;
  }
`;

class InternshipItem extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { internship } = this.props;
    const tags = internship.extratags.toString().split(",");

    return (
      <Container>
        <div className="col1">
          <h2><a href="#" onClick={this.openModal}>{internship.position}</a></h2>
          <h5>
            <a href={`http://${internship.applyurl}`} target="_blank">
              {internship.companyname}
            </a>
          </h5>
        </div>
        <div className="col2">
          { tags.map(tag => <Tag key={tag} href={`/tag/${tag}`}>{tag}</Tag>) }
        </div>
        <div className="col3">
          <p className="exp">Salary: {internship.salary}</p>
          <a href={`http://${internship.applyurl}`} target="_blank" className="apply">
            Apply
          </a>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          portalClassName="modal"
          className="Modal"
          overlayClassName="Overlay"
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="close">
            <a href="#" onClick={this.closeModal} className="x">✕</a>
          </div>

          <div className="info__title">
            <h3>{internship.position}</h3>
            <h5>
              <a href={`http://${internship.applyurl}`}>
                {internship.companyname}
              </a>
            </h5>
            <p><strong>Based from</strong>: {internship.basedfrom}</p>
          </div>

          <hr style={HrStyle} />

          <div className="info__desc">
            <p><strong>Description: </strong>{internship.description}</p>
          </div>
          
          <div className="info__req">
            <p><strong>Requirements</strong>: {internship.requirements}</p>
          </div>

          <div className="info__restrictions">
            <p><strong>Location Restriction</strong>: {internship.locationrestrictions}</p>
          </div>

          <div className="info__salary">
            <p><strong>Salary</strong>: {internship.salary}</p>
          </div>

          <div className="info__category">
            <p><strong>Category</strong>: {internship.category.charAt(0).toUpperCase() + internship.category.slice(1)}</p>
          </div>

          <div className="info__apply">
            <a href={`http://${internship.applyurl}`} target="_blank" className="apply">Apply</a>
          </div>

        </Modal>
      </Container>
    );
  }
}

export default InternshipItem;

// https://codepen.io/anon/pen/zMVdWy
