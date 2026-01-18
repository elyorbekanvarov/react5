import React from "react";
import { CiSearch } from "react-icons/ci";

function PostHero({ inputValue, setInputValue }) {
  return (
    <section className="posts1">
      <div className="posts1-wrapper container">
        <h1>Explore Our Posts</h1>
        <p>
          Discover amazing content from talented writers across various topics
        </p>

        <div className="search">
          <CiSearch />
          <input
            type="search"
            placeholder="Search posts..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default PostHero;
