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
            {post.description === null ? (
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                dolore quae enim temporibus quod in nobis debitis voluptatem!
                Officiis sit porro placeat nobis magnam eligendi deleniti
                voluptatum quia! Iure, aliquam?
              </p>
            ) : (
              post.description
            )}
          </div>

          <div className={post.language ? `category` : ""}>
            <span>{post.language?.toUpperCase()}</span>
          </div>
        </li>
      </div>
    </>
  );
}
