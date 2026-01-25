import React from "react";
import { Fragment } from "react";
import HomePage from "./pages/public/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsPage from "./pages/public/PostsPage";
import PostDetailPage from "./pages/public/PostDetailPage";
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import CreatePost from "./pages/admin/CreatePost";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout></PublicLayout>,
      children: [
        {
          index: true,
          element: <HomePage></HomePage>,
        },
        {
          path: "postsPage",
          element: <PostsPage></PostsPage>,
        },
        {
          path: "postDetailPage/:id",
          element: <PostDetailPage></PostDetailPage>,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          index: true,
          element: <LoginPage></LoginPage>,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout></AdminLayout>,
      children: [
        {
          index: true,
          element: <DashboardPage></DashboardPage>,
        },
        {
          path: "createPosts",
          element: <CreatePost></CreatePost>,
        },
      ],
    },
  ]);
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}
export default App;
