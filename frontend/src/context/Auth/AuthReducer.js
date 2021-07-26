const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "SIGNUP_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "SIGNUP_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case "SIGNIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "SIGNIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "SIGNIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
