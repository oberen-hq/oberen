import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("SIMPLIFY_USER")) || null,
  isFetching: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    if (state.user === undefined) {
      localStorage.setItem("SIMPLIFY_USER", JSON.stringify(null));
      localStorage.setItem("SIMPLIFY_ERROR", JSON.stringify(state.error));
    } else {
      localStorage.setItem("SIMPLIFY_USER", JSON.stringify(state.user));
      localStorage.setItem("SIMPLIFY_ERROR", JSON.stringify(state.error));
    }
  }, [state.user, state.error]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
