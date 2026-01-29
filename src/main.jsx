import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import PostContextProvider from "./context/PostContext";
createRoot(document.getElementById("root")).render(
  <>
    <PostContextProvider>
      <App />
    </PostContextProvider>
    <ToastContainer />
  </>,
);
