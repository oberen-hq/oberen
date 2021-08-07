import { useDispatch } from "react-redux";

export const ScrollToElement = (string: string) => {
  return (dispatch: any) => {
    dispatch({ type: "scrollToElement", payload: string });
  };
};
