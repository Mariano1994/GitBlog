import "./Post.css";

export function Post({ post }) {
  return (
    <>
      <div className="posts-content">
        <li>
          <div className="post-header">
            <h3>{post.title}</h3>
            <span> Ha 1 dia</span>
          </div>
          <div className="post-content">
            <p>{post.content}</p>
          </div>
        </li>
      </div>
    </>
  );
}
