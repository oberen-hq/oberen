import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";

import {
  MeDocument,
  MeQuery,
  useLoginUserMutation,
} from "../../generated/graphql";
import { useHistory } from "react-router-dom";
import { toErrorMap } from "../../utils/toErrorMap";

interface Props {
  values: any;
  prevStep: Function;
  handleChange: Function;
}

export default function LoginForm({ handleChange, values, prevStep }: Props) {
  // Login mutation.
  const [login] = useLoginUserMutation();

  // Hooks

  const history = useHistory();
  const [errors, setErrors]: any[] = useState([]);

  // Go back a single step to main user form page.

  const returnBack = (event: any) => {
    event.preventDefault();
    prevStep(2);
  };

  // Handle submit and login request.

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Gets the response from login mutation.

    const response = await login({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },

      // Update the cache for the local user.

      update: (cache, { data }) => {
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            __typename: "Query",
            me: data?.loginUser.user as any,
          },
        });
      },
    });

    // Error handling.

    if (response.data?.loginUser.errors) {
      setErrors(toErrorMap(response.data.loginUser.errors));
    } else if (response.data?.loginUser.token) {
      setErrors([]);
      localStorage.setItem(
        "OBEREN-ACCESS-TOKEN",
        response.data?.loginUser.token,
      );

      history.push("/home");

      setTimeout(() => {
        window.location.replace("/home");
      }, 1000);
    } else {
      setErrors([{ field: "User", message: "No data was retrieved." }]);
    }
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
        <RaisedButton onClick={handleSubmit} />
        <RaisedButton onClick={returnBack}>Back</RaisedButton>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
