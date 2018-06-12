import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const AppB = props => (
  <div>
    <RaisedButton label={props.buttonText} onClick={props.onClick} />
  </div>
);

AppB.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

AppB.defaultProps = {
  buttonText: 'defaultText',
  onClick: () => console.log('default click action')
};

export default AppB;
