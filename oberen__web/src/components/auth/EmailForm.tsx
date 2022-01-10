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
  const [skip, setSkip] = useState(false);
  const { data, error } = useCheckEmailExistsQuery({
    skip: skip,
    variables: {
      email: values.email,
    },
  });

  if (error) throw error;

  useEffect(() => {
    if (validator.isEmail(values.email)) {
      if (skip) {
        setSkip(false);
      }
    }
  }, [skip, values.email]);

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
