const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP_START":
      return {
        user: null,
        isFetching: true,
        error: null,
      };
    case "SIGNUP_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: null,
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
        error: null,
      };
    case "SIGNIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: null,
      };
    case "SIGNIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };

    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followers: [state.user.followers, action.payload],
        },
        isFetching: false,
        error: null,
      };

    case "FOLLOW_FAILURE":
      return {
        ...state,
        user: {
          ...state.user,
          followers: [state.user.followers],
        },
        isFetching: false,
        error: action.payload,
      };

    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followers: state.user.followers.filter(
            (follower) => follower !== action.payload
          ),
        },
        isFetching: false,
        error: null,
      };

    case "UNFOLLOW_FAILURE":
      return {
        ...state,
        user: {
          ...state.user,
          followers: [state.user.followers],
        },
        isFetching: false,
        error: action.payload,
      };

    case "CHANGE_SETTINGS_START":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        isFetching: true,
        error: null,
      };

    case "CHANGE_SETTINGS_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        isFetching: false,
        error: null,
      };

    case "CHANGE_SETTINGS_FAILURE":
      return {
        ...state,
        user: {
          ...state.user,
        },
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
