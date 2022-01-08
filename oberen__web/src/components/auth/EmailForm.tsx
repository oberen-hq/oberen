import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import { useQuery } from "@apollo/client";
import { CHECK_EMAIL_EXISTS_QUERY } from "../../graphql/queries";

interface Props {
  nextStep: Function;
  handleChange: Function;
  values: any;
}

export default function EmailForm({ values, nextStep, handleChange }: Props) {
  const { loading, data, error } = useQuery(CHECK_EMAIL_EXISTS_QUERY, {
    variables: {
      email: values.email,
    },
  });

  if (error) throw error;

  const moveForward = (event: any) => {
    event.preventDefault();

    if (data.checkEmailExists) {
      nextStep(2);
    } else {
      nextStep(1);
    }
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter your email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <RaisedButton label="Continue" primary={true} onClick={moveForward} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
