import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";

interface Props {
  values: any;
  prevStep: Function;
  handleChange: Function;
}

export default function LoginForm({ handleChange, values, prevStep }: Props) {
  const returnBack = (event: any) => {
    event.preventDefault();
    prevStep(2);
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter your password"
          floatingLabelText="Password"
          onChange={handleChange("password")}
          defaultValue={values.password}
          type="password"
        />
        <br />
        <RaisedButton />
        <RaisedButton onClick={returnBack}>Back</RaisedButton>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
