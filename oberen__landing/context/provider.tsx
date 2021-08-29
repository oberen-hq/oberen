import { useReducer } from "react";
import Reducer from "./reducer";
import { Context } from "./context";

const initialState = {
  isOpen: false,
};

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
