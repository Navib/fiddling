import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function ChatBox(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignContent={'center'} justify={'center'}>
        <Grid item xs={10}>
          <List>
            {props.message.map((msg, i) => <ListItem key={i}>{msg}</ListItem>)}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

ChatBox.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.any
};

ChatBox.defaultProps = {
  message: ''
};

export default withStyles(styles)(ChatBox);
