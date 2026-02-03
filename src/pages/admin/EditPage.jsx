import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PostContext } from "../../context/PostContext";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostContext);

  const token = JSON.parse(localStorage.getItem("token"));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  // 🔹 Postni id bo‘yicha topish
  useEffect(() => {
    const post = posts.find(p => p.id === Number(id));

    if (!post) {
      toast.error("Post topilmadi");
      navigate("/admin/posts");
      return;
    }

    setTitle(post.title);
    setContent(post.content || "");
    setIsActive(post.is_active);
    setPreview(post.image); // backend’dan keladigan image url
  }, [id, posts, navigate]);

  // 🔹 Image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // 🔹 Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Avval login qiling");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("is_active", isActive);
      if (image) formData.append("image", image);

      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/articles/${id}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Yangilashda xatolik");

      const updatedPost = await res.json();

      setPosts(
        posts.map(p => (p.id === updatedPost.id ? updatedPost : p))
      );

      toast.success("Post muvaffaqiyatli yangilandi");
      navigate("/admin/posts");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="edit-page">
      <h3>Edit Post</h3>

      <form onSubmit={handleSubmit} className="edit-form">
        <label>
          Title
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Content
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows="6"
          />
        </label>

        <label>
          Image
          <input type="file" onChange={handleImageChange} />
        </label>

        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{ width: "200px", marginTop: "10px" }}
          />
        )}

        <label>
          Status
          <select
            value={isActive}
            onChange={e => setIsActive(e.target.value === "true")}
          >
            <option value="true">Published</option>
            <option value="false">Draft</option>
          </select>
        </label>

        <button type="submit" className="save">
          Save changes
        </button>
      </form>
    </div>
  );
}
