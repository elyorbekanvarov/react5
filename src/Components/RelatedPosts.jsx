import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Section3Cards from "../Components/Section3Cards";
let Base = import.meta.env.VITE_BASE_URL;
function RelatedPosts({ id }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getAllPosts() {
      try {
        const res = await fetch(`${Base}/api/v1/articles/`);
        if (!res.ok) throw new Error("related postda muammo");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getAllPosts();
  }, []);
  let relatedPosts = posts.filter((post) => post.id !== id);
  if (relatedPosts.length > 2) {
    relatedPosts = relatedPosts.slice(0, 2);
  }
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: '32px', paddingBottom: "64px", justifyContent: "center"}}>
      {relatedPosts.map((post) => (
        <Section3Cards key={post.id} post={post} />
      ))}
    </div>
  );
}
export default RelatedPosts;
