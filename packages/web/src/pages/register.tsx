import React from "react";

import { Formik, Form } from "formik";
import { Button } from "@chakra-ui/react";
import { Wrapper, InputField } from "../components";

import { useRegisterMutation } from "../generated/graphql";
import { useRouter } from "next/router";

import { toErrorMap } from "../utils";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();

  return (
    <React.Fragment>
      <Wrapper variant="small">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
            setSubmitting(true);

            const response = await register(values);
            if (response.data?.register.errors) {
              setErrors(toErrorMap(response.data.register.errors));
              setSubmitting(false);
            } else if (response.data?.register.user) {
              setSubmitting(false);
              resetForm();
              router.push("/");
            } else {
              setSubmitting(false);
            }
          }}
        >
          {(props) => (
            <Form>
              <InputField
                name="username"
                label="Username"
                placeholder="Your username"
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                mt={4}
                mb={4}
              />
              <InputField
                name="email"
                label="Email"
                placeholder="Your email"
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                mt={4}
                mb={4}
              />
              <InputField
                name="password"
                label="Password"
                placeholder="Your password"
                type="password"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
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
