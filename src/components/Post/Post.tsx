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
            <p>
              {post.description !== null
                ? post.description
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa officiis rerum fuga quis natus accusantium explicabo ullam voluptates atque repudiandae, a voluptatem porro quidem nesciunt facilis impedit delectus repellat?"}
            </p>
          </div>

          <div className={post.language? `category`: ''}>
            <span>{post.language?.toUpperCase()}</span>
          </div>

        </li>
      </div>
    </>
  );
}
