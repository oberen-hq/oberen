import { FieldError } from "../generated/graphql";

/**
 * @title toErrorMap
 * @description Splits the field error array into individual errors.
 * @param errors The list of errors
 * @returns {FieldError[]}
 * **/

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};
