import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const PostContext = createContext();
let Base = import.meta.env.VITE_BASE_URL;

function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  async function getPost() {
    try {
      const res = await fetch(`${Base}/api/v1/articles/`);
      if (!res.ok) throw new Error("Xatolik yuz berdi");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts, getPost }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
