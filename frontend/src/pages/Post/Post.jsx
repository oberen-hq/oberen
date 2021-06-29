import "./Post.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";

import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

import { AuthContext } from "../../context/AuthContext";

let url = "http://localhost:3001/api";

export default function Post() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [post, setPost] = useState({});
  const userId = useParams().userId;
  const postId = useParams()._id;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${url}/posts/${postId}`);
      setPost(res.data);
    };

    fetchData();
  }, [postId]);

  return (
    <>
      <Topbar />
      <div className="postContainer">
        <Sidebar />
        <div className="feed">
          <div className="feedWrapper">
            <Post post={post}></Post>
          </div>
        </div>
        <Rightbar />
      </div>
    </>
  );
}
