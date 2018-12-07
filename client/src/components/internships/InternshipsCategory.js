import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSoftware, getMarketing, getDesign, getTopCompanies, getNonTechy } from '../../actions/internshipActions';
import InternshipFeed from './InternshipFeed';

class InternshipsCategory extends Component {
    constructor(props) {
      super(props);
      const { match } = this.props;
      const keyword = match.params.category.toString().toLowerCase();
      this.state = {
        category: keyword
      }
    }

    componentDidMount () {
      switch(this.state.category) {
        case "software":
          return this.props.getSoftware();
        case "marketing":
          return this.props.getMarketing();
        case "design":
          return this.props.getDesign();
        case "top-companies":
          return this.props.getTopCompanies();
        case "non-techy":
          return this.props.getNonTechy();
        default:
          return console.log("err");
      }
    }

  render() {
    const { internships, loading } = this.props.internship;
    let content;

    if (internships === null || loading) {
      content = <h1>NONE</h1>;
    } else {
      content = <InternshipFeed internships={internships} />;
    }

    return (
      <div>
        { content }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  internship: state.internship
});

export default connect(mapStateToProps, { getSoftware, getMarketing, getDesign, getTopCompanies, getNonTechy })(InternshipsCategory);