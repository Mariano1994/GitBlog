import { Post } from "../Post/Post";
import "./Posts.css";

interface PostProps {
  id: number;
  title: string;
  content: string;
  publishedAt: Date;
}

export function Posts({posts} : PostProps) {
  return (
    <>
      <div className="post-grid">
        <ul className="post-content--wrapper">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
