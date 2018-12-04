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
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }
  render() {
    return (
      <CourseForm
        allAuthors={[]}
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
  return {
    course: course
  };
};

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    acitons: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
