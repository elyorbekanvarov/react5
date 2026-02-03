import "./create-post.css";
import { useRef, useEffect, useState, useContext } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { PostContext } from "../../context/PostContext";
const Base = import.meta.env.VITE_BASE_URL;
export default function CreatePost() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingPost = location.state?.post;
  const { getPost } = useContext(PostContext);
  const titleRef = useRef();
  const contentRef = useRef();
  const categoryRef = useRef();
  const imgRef = useRef();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(editingPost?.image || "");
  useEffect(() => {
    fetch(`${Base}/api/v1/categories/`)
      .then((res) => res.json())
      .then(setCategories)
      .catch(() => toast.error("Category yuklanmadi"));
  }, []);
  useEffect(() => {
    if (editingPost) {
      titleRef.current.value = editingPost.title;
      contentRef.current.value = editingPost.content;
      categoryRef.current.value = editingPost.category.id;
    }
  }, [editingPost]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tokenData = localStorage.getItem("token");
    if (!tokenData) return toast.error("Avval login qiling");
    const token = JSON.parse(tokenData);
    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    formData.append("content", contentRef.current.value);
    formData.append("category", categoryRef.current.value);
    if (imgRef.current.files[0]) {
      formData.append("image", imgRef.current.files[0]);
    }
    try {
      setLoading(true);

      const res = await fetch(
        editingPost
          ? `${Base}/api/v1/articles/${editingPost.id}/`
          : `${Base}/api/v1/articles/`,
        {
          method: editingPost ? "PUT" : "POST",
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
          body: formData,
        },
      );

      if (!res.ok) throw new Error("Xatolik yuz berdi");

      toast.success(editingPost ? "Post yangilandi" : "Post yaratildi");
      await getPost();
      navigate("/admin/posts");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <h1 className="create-post__title">
        {editingPost ? "Edit Post" : "Create New Post"}
      </h1>
      <p className="create-post__subtitle">
        {editingPost
          ? "Update your post information"
          : "Fill in the details to create a new blog post"}
      </p>
      <div className="create-post__grid">
        <div className="create-post__main-card">
          <div className="create-post__field">
            <label className="create-post__label">Post Title</label>
            <input ref={titleRef} className="create-post__input" required />
          </div>

          <div className="create-post__field">
            <label className="create-post__label">Content</label>
            <textarea
              ref={contentRef}
              className="create-post__textarea"
              required
            />
          </div>
        </div>
        <div className="create-post__side">
          <div className="create-post__side-card">
            <span className="post-settings">Post Settings</span>
            <br />
            <label className="create-post__label">Category</label>
            <select ref={categoryRef} className="create-post__select" required>
              <option value="">Select category</option>
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
                onChange={handleImageChange}
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
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="create-post__preview"
              />
            )}
          </div>
        </div>
      </div>
      <div className="create-post__actions">
        <button
          type="submit"
          className="create-post__btn create-post__btn--primary"
          disabled={loading}
        >
          {loading ? "Saving..." : editingPost ? "Update Post" : "Publish Post"}
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
