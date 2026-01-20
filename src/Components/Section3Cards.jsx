import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
function Section3Cards({ post }) {
  return (
    <div className="section3-card">
      <img src={post.image} alt={post.title} />

      <div className="card-title">
        <div className="card-date">
          <img src="/images/chemadan.svg" width={16} height={16} />
          <span>{post.created_at.slice(0,10)}</span>
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
