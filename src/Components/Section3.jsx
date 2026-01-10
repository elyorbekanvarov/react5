import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Section3Cards from "./Section3Cards.jsx";
function Section3() {
  return (
    <Fragment>
      <section className="section3 container">
        <div className="section3-titles">
          <div className="section3-title">
            <h3>Latest Posts</h3>
            <p>Check out our most recent articles</p>
          </div>
          <div className="view-all">
            <Link to="#">
              <span>View All</span>
              <img
                src="/images/right-black.png"
                alt="right"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
        <Section3Cards></Section3Cards>
      </section>
    </Fragment>
  );
}
export default Section3;
