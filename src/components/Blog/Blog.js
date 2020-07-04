import React, { useState, useContext, useEffect } from "react";
import "./Blog.css";
import "bootstrap/dist/css/bootstrap.css";
import Posts from "../Posts/Posts";
import Panigation from "../Panigation/Panigation";
import axios from "axios";

export default function Blog(props) {
  const [showPosts, setShowPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  // using exiost to get data from api
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://crud-list-book.glitch.me/api/v1/posts/"
      );
      setShowPosts(res.data.fullPosts);
    };
    fetchPosts();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = showPosts.slice(indexOfFirstPost, indexOfLastPost);
  // change page
  const paninate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <Posts posts={currentPosts} loading={loading} />
      <Panigation
        postsPerPage={postsPerPage}
        totalPosts={showPosts.length}
        paninate={paninate}
      />
    </div>
  );
}
