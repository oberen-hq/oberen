import React, { useEffect } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import validator from "validator";

import { useState } from "react";
import { useCheckEmailExistsQuery } from "../../generated/graphql";

interface Props {
  nextStep: Function;
  handleChange: Function;
  values: any;
}

export default function EmailForm({ values, nextStep, handleChange }: Props) {
  // Hooks

  const [skip, setSkip] = useState(false);

  // CheckEmailExists query.

  const { data, error } = useCheckEmailExistsQuery({
    skip: skip,
    variables: {
      email: values.email,
    },
  });

  // Error handling

  if (error) throw error;

  // Check the email exists if the email is valid to increase speed.

  useEffect(() => {
    if (validator.isEmail(values.email)) {
      if (skip) {
        setSkip(false);
      }
    }
  }, [skip, values.email]);

  // Progress onto the next part of the form depending on if the email already exists.

  const moveForward = (event: any) => {
    event.preventDefault();

    console.log(data?.checkEmailExists);

    if (data?.checkEmailExists) {
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
