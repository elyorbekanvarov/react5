import React from "react";
import { Fragment } from "react";

function Navbar() {
  return (
    <Fragment>
      <div>
        <nav>
          <div className="logo">
            <img src="./images/header-logo.svg" alt="logo" />
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Posts</a></li>
            <button>Login</button>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default Navbar;
