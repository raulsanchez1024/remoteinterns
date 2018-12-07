import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInternshipsByTag } from '../../actions/internshipActions';
import InternshipFeed from './InternshipFeed';

class InternshipsTag extends Component {
    constructor(props) {
      super(props);
      const { match } = this.props;
      const keyword = match.params.tag;
      this.state = {
        tag: keyword
      }
    }

    componentDidMount () {
      this.props.getInternshipsByTag(this.state.tag);
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

export default connect(mapStateToProps, { getInternshipsByTag })(InternshipsTag);