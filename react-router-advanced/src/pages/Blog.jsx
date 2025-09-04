import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    { id: 1, title: "First Blog Post" },
    { id: 2, title: "Second Blog Post" },
    { id: 3, title: "Third Blog Post" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Blog</h1>
      <ul className="list-disc pl-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="text-blue-600">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
