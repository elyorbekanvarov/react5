import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Section3Cards from "./Section3Cards";
import { Link } from "react-router-dom";

function Section3() {
  const { posts } = useContext(PostContext);

  return (
    <section className="section3 container">
      <div className="section3-titles">
        <div className="section3-title">
          <h3>Latest Posts</h3>
          <p>Check out our most recent articles</p>
        </div>
        <Link to="/postsPage">View All</Link>
      </div>

      <div className="section3-cards">
        {posts.slice(0, 3).map((post) => (
          <Section3Cards key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default Section3;
