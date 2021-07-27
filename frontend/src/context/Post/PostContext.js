import { createContext, useEffect, useReducer } from "react";
import { FaLockOpen } from "react-icons/fa";
import PostReducer from "./PostReducer";

const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  error: null,
};

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
