import React from 'react';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import withStyles from '@material-ui/core/styles/withStyles';
import keycode from 'keycode';
import { mqttService } from 'services';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class App extends React.Component {
  state = {
    offline: false,
    message: ''
  };

  componentDidMount() {
    this.mqttClient = mqttService(
      `lea_${Math.random()
        .toString(16)
        .substr(2, 8)}`
    );
  }
  componentWillUnmount() {
    this.mqttClient.end();
  }

  handleChangeSendMode = event => {
    this.setState({ offline: event.target.checked });
  };

  sendMessage = async () => {
    try {
      await this.mqttClient.publish(
        `lea/message/${this.state.offline ? 'simple' : 'tweet'}`,
        this.state.message
      );
      console.log(`Message "${this.state.message}" sent !`);
      this.setState({ message: '' });
    } catch (e) {
      console.error(`Unable to send message : ${e}`);
    }
  };

  handleKeyDown = event => {
    if (keycode.isEventKey(event, 'enter')) {
      this.sendMessage();
      event.preventDefault();
    }
  };

  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography variant="headline">Envoyez un message à Léa !</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.offline}
              onChange={this.handleChangeSendMode}
            />
          }
          label="Offline"
        />
        <TextField
          fullWidth={true}
          placeholder="Saisissez votre message..."
          multiline
          rowsMax="5"
          autoFocus={true}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleMessageChange}
          value={this.state.message}
        />
        <Button
          variant="fab"
          color="primary"
          aria-label="Send"
          className={classes.fab}
          onClick={this.sendMessage}
        >
          <SendIcon />
        </Button>
      </>
    );
  }
}

export default withStyles(styles)(App);
