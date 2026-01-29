import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import RecentPosts from "../../Components/RecentPosts";
function DashboardPage() {
  let { posts } = useContext(PostContext);
  const categoriesCount = posts.reduce((acc, post) => {
    if (!acc.includes(post.category)) {
      acc.push(post.category);
    }
    return acc;
  }, []).length;
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome back! Here's an overview of your blog.</p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="dashboard-card-top">
            <img
              src="/images/total-posts.png"
              alt="img"
              width={48}
              height={48}
            />
            <span>+12%</span>
          </div>
          <h3>{posts.length}</h3>
          <p>Total Posts</p>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-top">
            <img
              src="/images/categories.png"
              alt="img"
              width={48}
              height={48}
            />
            <span>+2</span>
          </div>
          <h3>{categoriesCount}</h3>
          <p>Categories</p>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-top">
            <img src="/images/views.png" alt="img" width={48} height={48} />
            <span>+23%</span>
          </div>
          <h3>12.5K</h3>
          <p>Total Views</p>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-top">
            <img src="/images/users.png" alt="img" width={48} height={48} />
            <span>+8%</span>
          </div>
          <h3>1.2K</h3>
          <p>Active Users</p>
        </div>
      </div>
      <RecentPosts></RecentPosts>
    </div>
  );
}
export default DashboardPage;
