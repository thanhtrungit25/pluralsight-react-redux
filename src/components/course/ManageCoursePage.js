import React, { Component } from "react";
import PropTypes from "prop-types";0;
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
  }
  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    this.setState({ course: course });
  }
  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        course={this.state.course}
        errors={this.state.errors}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
};

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    acitons: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
