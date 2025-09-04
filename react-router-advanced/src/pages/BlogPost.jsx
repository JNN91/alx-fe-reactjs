import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Blog Post {id}</h1>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
}

export default BlogPost;
