import React from "react";
import { Formik, Form, Field } from "formik";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const handleChange = () => {
    return;
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{ name: "Sasuke" }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    value={field.username}
                    onChange={handleChange}
                    id="username"
                    placeholder="Your username"
                  />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Register;
