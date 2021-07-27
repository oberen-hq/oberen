const { FaAssistiveListeningSystems } = require("react-icons/fa");

const PostReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS_START":
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case "GET_ALL_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        isFetching: false,
        error: null,
      };

    case "GET_ALL_POSTS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case "GET_SINGLE_POST_START":
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case "GET_SINGLE_POST_SUCCESS":
      return {
        ...state,
        posts: [action.payload],
        isFetching: false,
        error: null,
      };

    case "GET_SINGLE_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case "ADD_POST_START":
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case "ADD_POST_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: null,
      };

    case "ADD_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case "UPDATE_POST_START":
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case "UPDATE_POST_SUCCESS":
      return {
        ...state,
        posts: [action.payload],
        isFetching: false,
        error: null,
      };

    case "UPDATE_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case "DELETE_POST_START":
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case "DELETE_POST_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: null,
      };

    case "DELETE_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
  }
};
