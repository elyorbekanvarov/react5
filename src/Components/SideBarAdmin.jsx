import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

function SideBarAdmin() {
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  }

  return (
    <div className="admin-sidebar">
      <div className="admin-logo">
        <Link to="/admin/dashboard">
          <img src="/images/header-logo.svg" alt="logo" />
        </Link>
        <p>Admin Panel</p>
      </div>

      <div className="admin-change">
        {/* DASHBOARD */}
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          <MdOutlineDashboard />
          <span>Dashboard</span>
        </NavLink>

        {/* POSTS */}
        <NavLink
          to="/admin/posts"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          <IoDocumentTextOutline />
          <span>Posts</span>
        </NavLink>

        {/* CREATE POST */}
        <NavLink
          to="/admin/createPosts"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          <FiPlus />
          <span>Create Post</span>
        </NavLink>
      </div>

      <div className="admin-logout">
        <button onClick={logOut}>
          <CiLogout />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SideBarAdmin;
