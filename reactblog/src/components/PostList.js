import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../containers/Loader";
import { toast } from "react-toastify";

const PostList = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/blog/posts/");
        console.log(res.data);

        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <h2>Post list</h2>

      {error &&
        toast.error(error.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          toastId: error.message,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })}
      {loading && <Loader />}
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <img src={post.thumbnaill} style={{width:"100px",height:"45px"}} alt="" />
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default PostList;
