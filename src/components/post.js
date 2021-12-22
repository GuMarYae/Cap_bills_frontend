import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div className ="flex justify-center mt-10">
      <div style={div}>
        <Link to={`/post/${post.id}`}>
          <h1>{post.subject}</h1>
        </Link>
        <h2>{post.details}</h2>
        <h2>{post.date}</h2>
      </div>
    </div>
  );
};

export default Post;
