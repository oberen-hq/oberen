import React from "react";

import { gql, useMutation } from "urql";
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Wrapper, InputField } from "../components";

interface RegisterProps {}

const REGISTER_MUTATION = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      user {
        id
        username
        email
      }
      errors {
        field
        message
      }
      message
    }
  }
`;

const Register: React.FC<RegisterProps> = ({}) => {
  const [, register] = useMutation(REGISTER_MUTATION);

  return (
    <React.Fragment>
      <Wrapper variant="small">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={async (values) => {
            await register(values);
          }}
        >
          {(props) => (
            <Form>
              <InputField
                name="username"
                label="Username"
                placeholder="Your username"
                type="text"
                mt={4}
                mb={4}
              />
              <InputField
                name="email"
                label="Email"
                placeholder="Your email"
                type="text"
                mt={4}
                mb={4}
              />
              <InputField
                name="password"
                label="Password"
                placeholder="Your password"
                type="password"
                mt={4}
                mb={6}
              />
              <Button
                type="submit"
                isLoading={props.isSubmitting}
                background="whitesmoke"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </React.Fragment>
  );
};

export default Register;
