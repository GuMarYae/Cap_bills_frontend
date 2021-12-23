import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {
    textAlign: "center",
    border: "0.3em outset white",
    borderRadius:"2em ",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div id = "billsIndex" className ="select-none cursor-pointer rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
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


//select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg  