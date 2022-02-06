import React from "react";
import { Box } from "@chakra-ui/react";

interface WrapperProps {
  variant?: "small" | "large";
}

const Wrapper: React.FC<WrapperProps> = ({ children, variant = "large" }) => {
  return (
    <Box
      mt={8}
      mx="auto"
      alignContent="center"
      maxW={variant === "large" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
