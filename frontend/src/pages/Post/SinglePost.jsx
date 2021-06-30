import "./Post.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";

import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

import Post from "../../components/post/Post";

import moment from "moment";

import { Link } from "react-router-dom";

import { MoreVert } from "@material-ui/icons";

import { AuthContext } from "../../context/AuthContext";

let url = "http://localhost:3001/api";

export default function SinglePost() {
  const { user: currentUser } = useContext(AuthContext);
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState();
  const postId = useParams()._id;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = currentUser.username
        ? await axios.get(url + "/posts/profile/" + currentUser.username)
        : await axios.get(url + "/posts/timeline/" + currentUser._id);

      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [currentUser.username, currentUser._id]);

  return (
    <>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
      {/* {post ? (
        <div>
          <div className="post">
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <Link to={`/profile/${currentUser.username}`}>
                    <img
                      className="postProfileImg"
                      src={
                        currentUser.profilePicture
                          ? PF + currentUser.profilePicture
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                    />
                  </Link>
                  <span className="postUsername">{currentUser.username}</span>
                  <span className="postDate">{presentedDate}</span>
                </div>
                <div className="postTopRight">
                  <MoreVert />
                </div>
              </div>
              <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={url + post.img} alt="" />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  <img
                    className="likeIcon"
                    src={`${PF}like.png`}
                    onClick={likeHandler}
                    alt=""
                  />
                  <img
                    className="likeIcon"
                    src={`${PF}heart.png`}
                    onClick={likeHandler}
                    alt=""
                  />
                  <span className="postLikeCounter">{like} likes</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* ) : (
        <div>Loading...</div>
      )} */}
    </>
  );
}
