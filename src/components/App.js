import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "./common/Header";
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.isLoading}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isLoading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);