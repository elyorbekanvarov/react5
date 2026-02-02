import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
function Section3Cards({ post }) {
  return (
    <div className="section3-card">
      <div className="relative rounded-t-2xl overflow-hidden">
        <h2 className="bg-[#4346EF] z-2 py-0.5 px-2.5 rounded-2xl text-white absolute top-5 left-4">
          {post.category?.name}
        </h2>
        <img
          className="rounded-t-2xl z-1 w-full h-full max-h-50 object-cover  transition-transform duration-500 group-hover:scale-110 "
          src={post.image}
          alt=""
        />
      </div>

      <div className="card-title">
        <div className="card-date">
          <img src="/images/chemadan.svg" width={16} height={16} />
          <span>{post.created_at.slice(0, 10)}</span>
        </div>

        <h4>{post.title}</h4>
        <p>{post.content.slice(0, 100)}...</p>

        <Link to={`/postDetailPage/${post.id}`} className="read-more">
          <span>Read more</span>
          <img src="/images/right-blue.png" width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}

export default Section3Cards;
