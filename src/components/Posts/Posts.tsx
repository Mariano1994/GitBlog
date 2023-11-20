import { Post } from "../Post/Post";
import "./Posts.css";

interface PostProps {
  id: number;
  title: string;
  content: string;
  publishedAt: Date;
}

export function Posts({ filteredPostList }: PostProps) {
  return (
    <>
      <div className="post-grid">
        <ul className="post-content--wrapper">
          {filteredPostList.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
