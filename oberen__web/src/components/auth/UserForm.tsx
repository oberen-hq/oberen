import { useState } from "react";
import EmailForm from "./EmailForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function UserForm() {
  // Set the default state.

  const [state, setState] = useState({
    step: 1,
    email: "",
    username: "",
    password: "",
  });

  // Move to the next step of the form

  const nextStep = (amount: number) => {
    setState({
      ...state,
      step: state.step + amount,
    });
  };

  // Move back a step of the form

  const prevStep = (amount: number) => {
    setState({
      ...state,
      step: state.step - amount,
    });
  };

  // Handle field changes

  const handleChange = (input: any) => (event: any) => {
    setState({
      ...state,
      [input]: event.target.value,
    });
  };

  // Depending on the step, display the form.

  switch (state.step) {
    case 1:
      return (
        <EmailForm
          values={state}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <RegisterForm
          values={state}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );

    case 3:
      return (
        <LoginForm
          values={state}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
  }

  return <></>;
}
