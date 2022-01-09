import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

import { AppBar, TextField } from "material-ui";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useCreateUserMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";

interface Props {
  values: any;
  prevStep: Function;
  handleChange: Function;
}

export default function RegisterForm({
  handleChange,
  values,
  prevStep,
}: Props) {
  const [register] = useCreateUserMutation();
  const history = useHistory();
  const [errors, setErrors]: any[] = useState([]);

  const returnBack = (event: any) => {
    event.preventDefault();
    prevStep(1);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await register({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      },
    });

    if (response.data?.createUser.errors) {
      setErrors(toErrorMap(response.data.createUser.errors));
    } else if (response.data?.createUser.token) {
      setErrors([]);
      localStorage.setItem(
        "OBEREN-ACCESS-TOKEN",
        response.data?.createUser.token,
      );
      history.push("/home");
    } else {
      setErrors([{ field: "User", message: "No data was retrieved." }]);
    }
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter your username"
          floatingLabelText="Username"
          onChange={handleChange("username")}
          defaultValue={values.username}
        />
        <br />
        <TextField
          hintText="Enter your password"
          floatingLabelText="Password"
          onChange={handleChange("password")}
          defaultValue={values.password}
          type="password"
        />
        <br />
        <RaisedButton onClick={handleSubmit} />
        <RaisedButton onClick={returnBack}>Back</RaisedButton>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
