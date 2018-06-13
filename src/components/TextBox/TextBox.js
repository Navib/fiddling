import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  menu: {
    width: '100%'
  }
});

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiline: '',
      message: ''
    };
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.props.saveComment(this.state.message);

    this.setState({ message: '' });
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        spacing={0}
        alignContent={'center'}
        justify={'flex-start'}
      >
        <Grid item xs={6}>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onClick={event => this.handleSubmit(event)}
          >
            <TextField
              id="multiline-flexible"
              label="Send a Message"
              multiline
              rows={2}
              rowsMax={4}
              value={this.state.message}
              onChange={event => this.handleChange(event)}
              className={classes.textField}
            />
            <Button
              variant="outlined"
              size="small"
              color="primary"
              className={classes.button}
              style={{ margin: '1em 8px' }}
              onClick={() => this.props.onSubmitToStore(this.state.message)}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

TextBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextBox);
