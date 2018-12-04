import * as types from "./actionTypes";
import authorApi from "../api/mockAuthorApi";
import courseApi from "../api/mockApiCourseApi";

export function createCourseSuccess(courses) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    courses
  };
}

export function updateCourseSuccess(courses) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    courses
  };
}

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return function(dispatch) {
    return authorApi.getAllAuthors(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      savedCourse.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
