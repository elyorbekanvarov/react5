import "./create-post.css";
import { useRef, useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
const Base = import.meta.env.VITE_BASE_URL;
export default function CreatePost() {
  const navigate = useNavigate();
  const { getPost } = useContext(PostContext);
  const titleRef = useRef();
  const contentRef = useRef();
  const categoryRef = useRef();
  const imgRef = useRef();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`${Base}/api/v1/categories/`)
      .then((res) => {
        if (!res.ok) throw new Error("Category yuklanmadi");
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch(() => toast.error("Categorylarni yuklashda xatolik"));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tokenData = localStorage.getItem("token");
    if (!tokenData) {
      toast.error("Avval login qiling");
      return;
    }
    if (!imgRef.current.files[0]) {
      toast.error("Rasm tanlang");
      return;
    }
    const token = JSON.parse(tokenData);
    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    formData.append("content", contentRef.current.value);
    formData.append("category", categoryRef.current.value);
    formData.append("image", imgRef.current.files[0]);
    try {
      setLoading(true);
      const res = await fetch(`${Base}/api/v1/articles/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
        body: formData,
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Post yaratishda xatolik");
      }
      toast.success("Post muvaffaqiyatli yaratildi");
      await getPost();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <h1 className="create-post__title">Create New Post</h1>
      <p className="create-post__subtitle">
        Fill in the details to create a new blog post
      </p>

      <div className="create-post__grid">
        <div className="create-post__main-card">
          <div className="create-post__field">
            <label className="create-post__label">Post Title</label>
            <input
              ref={titleRef}
              className="create-post__input"
              type="text"
              placeholder="Enter post title..."
              required
            />
          </div>

          <div className="create-post__field">
            <label className="create-post__label">Content</label>
            <textarea
              ref={contentRef}
              className="create-post__textarea"
              placeholder="Write your post content here..."
              required
            />
          </div>
        </div>
        <div className="create-post__side">
          <div className="create-post__side-card">
            <span className="post-settings">Post Settings</span>
            <br />

            <label className="create-post__label">Category</label>
            <select
              ref={categoryRef}
              className="create-post__select"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="create-post__side-card">
            <span className="featured">Featured Image</span>

            <div className="create-post__upload">
              <input
                ref={imgRef}
                type="file"
                id="upload"
                className="create-post__upload-input"
                accept="image/*"
                required
              />

              <label htmlFor="upload" className="create-post__upload-label">
                <span className="upload-icon">
                  <FiUpload />
                </span>
                <p className="create-post__upload-text">
                  Click to upload or drag and drop
                </p>
                <span className="create-post__upload-hint">
                  PNG, JPG or WEBP
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="create-post__actions">
        <button
          type="submit"
          className="create-post__btn create-post__btn--primary"
          disabled={loading}
        >
          {loading ? "Publishing..." : "Publish Post"}
        </button>

        <button
          type="button"
          className="create-post__btn create-post__btn--secondary"
          onClick={() => navigate("/admin/posts")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
