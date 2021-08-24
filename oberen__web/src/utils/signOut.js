const signOut = (dispatch) => {
  try {
    localStorage.removeItem("SIMPLIFY_USER");
    return true;
  } catch (err) {
    console.error(err);
    dispatch({ type: "SIGNOUT_FAILURE", payload: err.response });
    return false;
  }
};

export default signOut;
