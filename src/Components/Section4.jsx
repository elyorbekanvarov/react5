import React from "react";
import { Fragment } from "react";

function Section4() {
  return (
    <Fragment>
      <section className="section4 container">
        <div className="blogify">
          <img
            src="/images/header-logo.svg"
            alt="logo"
            width={101}
            height={28}
          />
          <p>
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/postsPage">Posts</a>
          <a href="/login">Login</a>
        </div>
        <div className="connect">
          <h3>Connect</h3>
          <div className="three-items">
            <a href="#">
              <img
                src="/images/twitter.png"
                alt="icon"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <img src="/images/github.svg" alt="icon" width={20} height={20} />
            </a>
            <a href="#">
              <img src="/images/in.png" alt="icon" width={20} height={20} />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Section4;
