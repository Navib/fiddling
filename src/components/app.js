import React from 'react';
import PropTypes from 'prop-types';
import ChatBox from '../containers/ChatBox/ChatBox';
import TextBox from '../containers/TextBox/TextBox';

const App = props => (
  <div>
    <nav>Nav Area</nav>
    <ChatBox />
    <TextBox />
    <footer>Footer Area</footer>
  </div>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
