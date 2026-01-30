import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiUser, CiCalendarDate } from "react-icons/ci";
import Section4 from "../../Components/Section4";
import Footer from "../../Components/Footer";
import RelatedPosts from "../../Components/RelatedPosts";
import { PostContext } from "../../context/PostContext";
function PostDetailPage() {
  const { posts } = useContext(PostContext);
  const { id } = useParams();
  const post = posts.find((item) => String(item.id) === id);
  if (!post) {
    return <p className="text-center py-10">Loading...</p>;
  }
  return (
    <>
      <section className="postDetail py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link
            to="/postsPage"
            className="flex items-center gap-2 py-3 px-6 text-blue-600 hover:underline"
          >
            <FaArrowLeftLong />
            <span className="text-sm font-medium">Back to Posts</span>
          </Link>
          <div className="detail mt-6">
            <p className="categoryName mb-2 px-3 py-1 bg-blue-600 text-white rounded-full inline-block text-sm">
              {post.category?.name}
            </p>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 mb-6 text-gray-600 text-sm">
              <p className="flex items-center gap-1">
                <CiUser />
                {post.author?.first_name || "Admin"}
              </p>
              <p className="flex items-center gap-1">
                <CiCalendarDate />
                {post.created_at?.slice(0, 10)}
              </p>
            </div>
            <img
              className="postDetailImg w-full max-w-4xl mx-auto rounded-lg mb-6"
              src={post.image}
              alt={post.title}
            />
            <p className="postContent text-gray-800 leading-relaxed">
              {post.content}
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Related Posts
            </h2>
            <RelatedPosts id={post.id} />
          </div>
        </div>
      </section>
      <Section4 />
      <Footer />
    </>
  );
}
export default PostDetailPage;
