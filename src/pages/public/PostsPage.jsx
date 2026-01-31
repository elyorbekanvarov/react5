import { useContext, Fragment, useState } from "react";
import { PostContext } from "../../context/PostContext";
import Section4 from "../../Components/Section4";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import PostHero from "../../Components/PostHero";
function PostsPage() {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("All");

  const { posts } = useContext(PostContext);

  const categories = [
    "All",
    ...posts
      .map((p) => p.category.name)
      .filter((v, i, a) => a.indexOf(v) === i),
  ];
  const filteredPosts = posts.filter((item) => {
    const matchSearch = item.content
      .toLowerCase()
      .includes(inputValue.toLowerCase());

    const matchCategory = category === "All" || item.category.name === category;

    return matchSearch && matchCategory;
  });

  return (
    <Fragment>
      <PostHero inputValue={inputValue} setInputValue={setInputValue} />
      <div className="posts2 container">
        <div className="select">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`cursor-pointer ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="section3-cards">
          {filteredPosts.map((post) => (
            <div
              className="section3-card"
              key={post.id}
              style={{ position: "relative" }}
            >
              <img src={post.image} alt={post.title} className="card-image" />
              {post.tags && post.tags.length > 0 && (
                <div className="card-tags-overlay">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="card-title">
                <div className="card-date">
                  <img src="/images/chemadan.svg" width={16} height={16} />
                  <span>{post.created_at.slice(0, 10)}</span>
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
