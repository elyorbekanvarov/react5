import React from "react";
import cardsData from "../data/cardsData.js";
import { Fragment } from "react";

function Section3() {
  return (
    <Fragment>
      <section className="section3">
        <div className="section3-titles">
          <div className="section3-title">
            <h3>Latest Posts</h3>
            <p>Check out our most recent articles</p>
          </div>
          <div className="view-all">
            <a href="#">
              <span>View All</span>
              <img
                src="/images/right-black.png"
                alt="right"
                width={16}
                height={16}
              />
            </a>
          </div>
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
                <a href="#" className="read-more">
                  <span>Read more</span>
                  <img src="/images/right-blue.png" width={16} height={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default Section3;
