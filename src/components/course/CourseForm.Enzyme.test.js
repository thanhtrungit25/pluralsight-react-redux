import expect from "expect";
import React from "react";
import { mount, shallow } from "enzyme";
import CourseForm from "./CourseForm";

function setup(saving) {
  let props = {
    course: {},
    saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe("CourseForm via React Test Utils", () => {
  it("render form and h1", () => {
    const wrapper = setup();
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find("h1").text()).toBe("Manage Course");
  });
  it("Save button is lablled 'Save' when not saving", () => {
    const wrapper = setup(false);
    expect(wrapper.find("input").props().value).toBe("Save");
  });
  it("Save button is lablled 'Saving' when save", () => {
    const wrapper = setup(true);
    expect(wrapper.find("input").props().value).toBe("Saving...");
  });
});


