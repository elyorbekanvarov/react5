import React from "react";
import SideBar from "../Components/SideBar";
import { Fragment } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <nav className="nav container">
        <div className="logo">
          <img src="./images/header-logo.svg" alt="logo" />
        </div>
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PostsPage">Posts</Link>
          </li>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </ul>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <FaXmark></FaXmark> : <FaBars className="bar"></FaBars>}
        </div>
      </nav>
      {open && <SideBar></SideBar>}
    </Fragment>
  );
}
export default Navbar;
