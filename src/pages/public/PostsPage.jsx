import React, { Fragment, useEffect, useState } from "react";
import Section4 from "../../Components/Section4";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import PostHero from "../../Components/PostHero";
import { toast } from "react-toastify";
let Base = import.meta.env.VITE_BASE_URL;
function PostsPage() {
  const [posts, setPosts] = useState([]);
  let [inputValue, setInputValue] = useState("");
  let [category, setCategory] = useState("All");
  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch(`${Base}api/v1/articles/`);
        if (!res.ok) {
          throw new Error("apdia muammo");
        }
        const data = await res.json();
        setPosts(data);
        toast("apidan ma'lumot keldi");
      } catch (error) {
        toast(error.message);
      }
    }
    getPosts();
  }, []);
  const filteredPosts = posts.filter((item) => {
    const matchSearch = item.content
      .toLowerCase()
      .includes(inputValue.toLowerCase());
    const matchCategory = category === "All" || item.category === category;
    return matchSearch && matchCategory;
  });
  return (
    <Fragment>
      <PostHero inputValue={inputValue} setInputValue={setInputValue} />
      <div className="posts2 container">
        <div className="select">
          <span
            className={`cursor-pointer ${category === "All" ? "active" : ""}`}
            onClick={() => setCategory("All")}
          >
            All
          </span>
          <span
            className={`cursor-pointer ${category === "Technology" ? "active" : ""}`}
            onClick={() => setCategory("Technology")}
          >
            Technology
          </span>
          <span
            className={`cursor-pointer ${category === "Productivity" ? "active" : ""}`}
            onClick={() => setCategory("Productivity")}
          >
            Productivity
          </span>
          <span
            className={`cursor-pointer ${category === "Design" ? "active" : ""}`}
            onClick={() => setCategory("Design")}
          >
            Design
          </span>
        </div>
        <div className="section3-cards">
          {filteredPosts.map((post) => (
            <div className="section3-card" key={post.id}>
              <img src={post.image} alt={post.title} />

              <div className="card-title">
                <div className="card-date">
                  <img src="/images/chemadan.svg" width={16} height={16} />
                  <span>{post.created_at}</span>
                </div>

                <h4>{post.title}</h4>
                <p>{post.content.slice(0, 120)}...</p>

                <Link to={`/postDetailPage/${post.id}`} className="read-more">
                  <span>Read more</span>
                  <img src="/images/right-blue.png" width={16} height={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Section4 />
      <Footer />
    </Fragment>
  );
}

export default PostsPage;
