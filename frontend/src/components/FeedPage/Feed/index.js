import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";

import PostContext from "../../../context/Post/PostContext";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { isFetching, error, dispatch } = useContext(PostContext);

  return (
    <Feed>
      <RecommendedJobs />
      <CreatePost />
      <Posts>
        {posts.map((post) => (
          <Post
            key={post.id}
            user={post.user}
            title={post.title}
            description={post.description}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
            file={post.file}
            timestamp={post.timestamp}
          />
        ))}
      </Posts>
    </Feed>
  );
};
