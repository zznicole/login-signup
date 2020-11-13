import React from "react";
import { Link } from "react-router-dom";
import { FormControl, Container, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  screen: {
    backgroundColor: "#00bcd4",
    // backgroundImage: "url'./assets/OSL-bg.png'",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
  },

  form: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },

  button: {
    width:'100%',
  }
}));

export default function LoginForm() {
  const classes = useStyles();
  return (
    <Container className={classes.screen}>
      <form className={classes.form}>
        <FormControl>
          <TextField
            type="Email"
            required
            variant="standard"
            size="medium"
            label="Email"
            floatingLabelText="Email"
          />
          <br />
          <TextField
            type="password"
            required
            variant="standard"
            size="medium"
            label="Password"
            floatingLabelText="Password"
          />
          <br />
          <Button variant="contained" color="primary">
            LOG IN
          </Button>
          <br />
          <br />
          <p>Not signed up yet? Sign up now!</p>
          <Link to="/signup">
            <Button variant="contained"  className={classes.button} color="primary">
              SIGN UP
            </Button>
          </Link>
        </FormControl>
      </form>
    </Container>
  );
}
