import { useState } from "react";
import Link from "react-router-dom";
import {
  Container,
  Heading,
  Box,
  Label,
  InputWrapper,
  Input,
  Submit,
  Text,
  PageLink,
} from "./elements";

export default function Register() {
  const [viewable, setViewable] = useState("password");
  return (
    <Container>
      <Heading>Register yourself.</Heading>
      <Box>
        <Label>Username</Label>
        <InputWrapper>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
        </InputWrapper>
      </Box>
      <Box>
        <Label>Username</Label>
        <InputWrapper>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </InputWrapper>
      </Box>
      <Box>
        <Label>Password</Label>
        <InputWrapper>
          <Input
            type={viewable}
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </InputWrapper>
      </Box>
      <Submit>Submit</Submit>
      <Text>
        Already have an account? <PageLink href="/auth/login">Login</PageLink>
      </Text>
    </Container>
  );
}
