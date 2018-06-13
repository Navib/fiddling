import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ChatBox from '../containers/ChatBox/ChatBox';
import TextBox from '../containers/TextBox/TextBox';
import Profile from '../components/Profile';

const App = props => (
  <div>
    <div>Header Area</div>
    <Route path="/profile" component={Profile} />
    <Route path="/" exact component={ChatBox} />
    <Route path="/" exact component={TextBox} />
  </div>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
