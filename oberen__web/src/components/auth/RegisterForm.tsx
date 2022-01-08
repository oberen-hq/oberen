import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

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
  const returnBack = (event: any) => {
    event.preventDefault();
    prevStep(1);
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <RaisedButton onClick={returnBack}>Back</RaisedButton>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
