import "./Post.css";

export function Post({ post }) {
  return (
    <>
      <div className="posts-content">
        <li>
          <div className="post-header">
            <h3>{post.name}</h3>
            <span> {post.created_at}</span>
          </div>
          <div className="post-content">
            <p>{post.description}</p>
          </div>

          <div className={post.language ? `category` : ""}>
            <span>{post.language?.toUpperCase()}</span>
          </div>
        </li>
      </div>
    </>
  );
}
