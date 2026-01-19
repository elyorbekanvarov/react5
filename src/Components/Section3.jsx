import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Section3Cards from "./Section3Cards.jsx";
let Base = import.meta.env.VITE_BASE_URL;
function Section3() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch(`${Base}api/v1/articles/`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  }, []);

  return (
    <section className="section3 container">
      <div className="section3-titles">
        <div className="section3-title">
          <h3>Latest Posts</h3>
          <p>Check out our most recent articles</p>
        </div>
        <div className="view-all">
          <Link to="/postsPage">
            <span>View All</span>
            <img
              src="/images/right-black.png"
              alt="right"
              width={16}
              height={16}
            />
          </Link>
        </div>
      </div>

      <div className="section3-cards">
        {posts.slice(0,3).map((post) => (
          <Section3Cards key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default Section3;
