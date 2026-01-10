import React from "react";
import { Fragment } from "react";
import cardsData from "../../data/cardsData";
import Section4 from "../../Components/Section4";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function PostsPage() {
  return (
    <Fragment>
      <section className="posts1">
        <div className="posts1-wrapper container">
          <h1>Explore Our Posts</h1>
          <p>Discover amazing content from talented writers across various topics</p>
          <div className="search">
            <CiSearch />
            <input type="search" placeholder="Search posts..."/>
          </div>
        </div>
      </section>
      <div className="posts2 container">
        <div className="select">
          <div className="all">
            <a href="#">All</a>
          </div>
          <a href="#">Technology</a>
          <a href="#">Productivity</a>
          <a href="#">Design</a>
        </div>
        <div className="section3-cards">
          {cardsData.map((card) => (
            <div className="section3-card" key={card.id}>
              <img src={card.img} alt={card.name} />
              <div className="card-title">
                <div className="card-date">
                  <img src="/images/chemadan.svg" width={16} height={16} />
                  <span>{card.date}</span>
                </div>
                <h4>{card.name}</h4>
                <p>{card.info}</p>
                <Link to="/PostDetailPage" className="read-more">
                  <span>Read more</span>
                  <img src="/images/right-blue.png" width={16} height={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="section3-cards">
          {cardsData.map((card) => (
            <div className="section3-card" key={card.id}>
              <img src={card.img} alt={card.name} />
              <div className="card-title">
                <div className="card-date">
                  <img src="/images/chemadan.svg" width={16} height={16} />
                  <span>{card.date}</span>
                </div>
                <h4>{card.name}</h4>
                <p>{card.info}</p>
                <Link to="/PostDetailPage" className="read-more">
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
