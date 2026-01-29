import { useState, useEffect } from "react";
let Base = import.meta.env.VITE_BASE_URL;
export default function RecentPosts() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      try {
        let res = await fetch(`${Base}/api/v1/articles/`);
        if (!res.ok) {
          throw new Error("olib kelishda muammo");
        }
        let data = await res.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getPosts();
  }, []);
  return (
    <div className="recent-posts">
      <h3>Recent Posts</h3>
      <p className="subtitle">Manage and monitor your latest content</p>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th>Status</th>
            <th className="right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, i) => (
            <tr key={i}>
              <td className="title">{post.title}</td>
              <td>
                <span className={`badge category ${post.category.name}`}>
                  {post.category.name}
                </span>
              </td>
              <td className="date">{post.updated_at.slice(0, 10)}</td>
              <td>
                <span
                  className={`badge status ${
                    post.is_active ? "published" : "draft"
                  }`}
                >
                  {post.is_active ? "published" : "draft"}
                </span>
              </td>
              <td className="right actions">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
