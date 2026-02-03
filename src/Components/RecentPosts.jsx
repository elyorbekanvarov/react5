import { useContext } from "react";
import { toast } from "react-toastify";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";
export default function RecentPosts() {
  const { posts, setPosts } = useContext(PostContext);
  const token = JSON.parse(localStorage.getItem("token"));
  let navigate = useNavigate();
  const deletePost = async (id) => {
    if (!token) {
      toast.error("Avval login qiling");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/articles/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        },
      );

      if (!res.ok) throw new Error("O'chirishda muammo");
      setPosts(posts.filter((post) => post.id !== id));
      toast.success("Post muvaffaqiyatli o'chirildi");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="title">{post.title}</td>
              <td>
                <span className={`badge category ${post.category.name}`}>
                  {post.category.name}
                </span>
              </td>
              <td className="date">{post.updated_at.slice(0, 10)}</td>
              <td>
                <span
                  className={`badge status ${post.is_active ? "published" : "draft"}`}
                >
                  {post.is_active ? "published" : "draft"}
                </span>
              </td>
              <td className="right actions">
                <button
                  className="edit"
                  onClick={() =>
                    navigate("/admin/createPosts", { state: { post } })
                  }
                >
                  Edit
                </button>
                <button onClick={() => deletePost(post.id)} className="delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
