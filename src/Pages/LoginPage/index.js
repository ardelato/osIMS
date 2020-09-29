import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// Form Components
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, TextField } from "@material-ui/core";

const userStyles = makeStyles({
  container: {
    //Styling the Container
    backgroundColor: "white",
    boxShadow: "0 0 3px 1px gray",
    width: "50%",
    height: "50vh",

    // Center align the content within the Container
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    // Vertically and Horizontally aligning the Container
    // Had to add height 100% to index.html to act as parent reference height
    position: "absolute",
    top: "25%",
    left: "25%",
  },
});

const Login = () => {
  const classes = userStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Container className={classes.container}>
        <h1 id="login-text">Login</h1>
        <form>
          {/* Username Text Field */}
          <TextField
            id="username"
            label="Username"
            type="text"
            name="username"
            margin="dense"
            fullWidth
            variant="outlined"
          />

          {/* Password Text Field */}
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            margin="dense"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
        <p>
          <small>
            If you do not have an account already,{" "}
            <a href="/signup">Signup here</a>
          </small>
        </p>
        <Button variant="contained" disableElevation>
          Login
        </Button>
      </Container>
    </div>
  );
};

export default Login;
