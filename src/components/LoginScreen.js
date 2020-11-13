import React from 'react';
import { FormControl, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {

})
export default function LoginForm() {
  const classes = useStyles();
  return (
    <Container>
      <form>
        <FormControl>
          <TextField required={true} variant='standard' label="Enter your Username or Email" floatingLabelText="Username" />
          <br />
          <TextField />
          <br />
          <Button variant="contained" color="">LOG IN</Button>
        </FormControl>
      </form>
      <p></p>
      <Button variant="contained" color="">SIGN UP</Button>
    </Container>

  );
}