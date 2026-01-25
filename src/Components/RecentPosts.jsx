const posts = [
  {
    title: "The Future of Web Development",
    category: "Technology",
    date: "2025-11-20",
    status: "Published",
  },
  {
    title: "Mastering Productivity",
    category: "Productivity",
    date: "2025-11-18",
    status: "Published",
  },
  {
    title: "Design Principles That Matter",
    category: "Design",
    date: "2025-11-15",
    status: "Draft",
  },
  {
    title: "Building Scalable Applications",
    category: "Technology",
    date: "2025-11-12",
    status: "Published",
  },
];

export default function RecentPosts() {
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
                <span className={`badge category ${post.category.toLowerCase()}`}>
                  {post.category}
                </span>
              </td>

              <td className="date">{post.date}</td>

              <td>
                <span
                  className={`badge status ${
                    post.status === "Published" ? "published" : "draft"
                  }`}
                >
                  {post.status}
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
