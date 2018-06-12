import React, { Component } from 'react';
import { connect } from 'react-redux';
import TheComponent from '../../components/ChatBox/ChatBox';

const mapStateToProps = (state, ownProps) => {
  return { message: state.message };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ChatBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent);

export default ChatBox;
