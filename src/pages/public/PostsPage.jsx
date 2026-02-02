import { useContext, Fragment, useState } from "react";
import { PostContext } from "../../context/PostContext";
import Section4 from "../../Components/Section4";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import PostHero from "../../Components/PostHero";
import Section3Cards from "../../Components/Section3Cards";
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
            <Section3Cards key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Section4 />
      <Footer />
    </Fragment>
  );
}

export default PostsPage;
