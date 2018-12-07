import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchedInternships } from '../../actions/internshipActions';
import InternshipFeed from './InternshipFeed';

class InternshipsSearch extends Component {
    constructor(props) {
      super(props);
      const { match } = this.props;
      const keyword = match.params.keyword;
      this.state = {
        search: keyword
      }
    }

    componentDidMount () {
      this.props.getSearchedInternships(this.state.search);
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

export default connect(mapStateToProps, { getSearchedInternships })(InternshipsSearch);