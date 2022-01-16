import React, { useContext } from "react";

// Create our user context and set default values.

export const UserContext = React.createContext({
  user: null,
  loading: false,
  error: null,
  logout: null,
});

export const UserConsumer = UserContext.Consumer;
export function useAuthContext() {
  return useContext(UserContext);
}
