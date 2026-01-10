import React from "react";
import { Fragment } from "react";
import cardsData from "../data/cardsData.js";
import { Link } from "react-router-dom";
function Section3Cards() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Section3Cards;
