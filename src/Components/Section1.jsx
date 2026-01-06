import React from "react";
import { Fragment } from "react";

function Section1() {
  return (
    <Fragment>
      <div>
        <section className="section1">
          <div className="section1-title">
            <h1>
              Create, Read,<h2>Inspire.</h2>
            </h1>
            <p>
              Discover stories written by amazing people. Share your knowledge
              and inspire others with your unique perspective.
            </p>
            <div className="two-btns">
              <button>
                <span>Explore Posts</span>
                <img
                  src="/images/right.png"
                  alt="right"
                  width={16}
                  height={16}
                />
              </button>
              <button>Get Started</button>
            </div>
          </div>
          <div className="section1-img">
            <img
              src="/images/section1-img.jpg"
              alt="img"
              width={584}
              height={328.5}
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Section1;
