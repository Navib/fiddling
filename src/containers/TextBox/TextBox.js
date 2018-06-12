import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_MESSAGES } from '../../actions';
import TheComponent from '../../components/TextBox/TextBox';

const mapStateToProps = (state, ownProps) => {
  return { message: state.message };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitToStore: message => {
      dispatch({ type: GET_MESSAGES, payload: message });
    }
  };
};

const TextBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default TextBox;
