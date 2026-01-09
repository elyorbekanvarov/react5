import React from "react";
import { Fragment } from "react";
import HomePage from "./pages/public/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsPage from "./pages/public/PostsPage";
import PostDetailPage from "./pages/public/PostDetailPage";
import PublicLayout from "./layouts/PublicLayout";
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
          path: "postDetailPage",
          element: <PostDetailPage></PostDetailPage>,
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
