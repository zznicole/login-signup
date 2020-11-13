import React from 'react';
import { FormControl, Container, TextField, Button, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: '#00bcd4',
    // backgroundImage: "url'./assets/OSL-bg.png'",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
  },

  form: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  }
}));

export default function LoginForm() {
  const classes = useStyles();
  return (
    <Container className={classes.screen}>
      <form className={classes.form}>
        <FormControl>
          <TextField type="Email" required variant='standard' size="medium" label="Email" floatingLabelText="Email" />
          <br />
          <TextField type="password" required variant='standard' label="Password" floatingLabelText="Password" />
          <br />
          <Button variant="contained" color="primary">LOG IN</Button>
          <br />
          <br />
          <p>Not signed up yet? Sign up now!</p>
          <Button variant="contained" color="primary">SIGN UP</Button>
        </FormControl>
      </form>
      
    </Container>

  );
}