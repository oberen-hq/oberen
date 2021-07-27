import React from "react";
import PostContextProvider from "../../context/Post/PostContext";

const FeedPage = () => {
  return (
    <PostContextProvider>
      <React.Fragment>
        <h1>Feed</h1>
      </React.Fragment>
    </PostContextProvider>
  );
};

export default FeedPage;
