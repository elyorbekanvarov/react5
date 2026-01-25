import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

function SideBarAdmin() {
  return (
    <div className="admin-sidebar">
      <div className="admin-logo">
        <Link to="/admin">
          <img src="/images/header-logo.svg" alt="logo" />
        </Link>
        <p>Admin Panel</p>
      </div>
      <div className="admin-change">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/postsPage"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          <IoDocumentTextOutline />
          <span>Posts</span>
        </NavLink>

        <NavLink
          to="createPosts"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          <FiPlus />
          <span>Create Post</span>
        </NavLink>
      </div>

      <div className="admin-logout">
        <Link to={"/login"}>
          <CiLogout />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default SideBarAdmin;
