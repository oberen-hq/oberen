import React, { InputHTMLAttributes } from "react";

import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  mt: number;
  mb: number;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);
  return (
    <Box mt={props.mt} mb={props.mb}>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
        <Input
          {...field}
          id={field.name}
          placeholder={props.placeholder}
          type={props.type}
        />
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    </Box>
  );
};
export default InputField;
