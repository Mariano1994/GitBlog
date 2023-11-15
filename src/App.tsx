import { Header } from "./components/Header/Header";
import { UserInformation } from "./components/UserInformation/UserInformation";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Posts } from "./components/Posts/Posts";
import { useState } from "react";
import { EmptyMessage } from "./components/EmptyMessage/EmptyMessage";

const initialsPosts = [
  // {
  //   id: Math.random(),
  //   title: "JavaScript data types and data structures",
  //   content:
  //     "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available...",
  //   publishedAt: new Date(),
  // },
  // {
  //   id: Math.random(),
  //   title: "JavaScript data types and data structures",
  //   content:
  //     "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available...",
  //   publishedAt: new Date(),
  // },
  // {
  //   id: Math.random(),
  //   title: "JavaScript data types and data structures",
  //   content:
  //     "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available...",
  //   publishedAt: new Date(),
  // },
  // {
  //   id: Math.random(),
  //   title: "JavaScript data types and data structures",
  //   content:
  //     "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available...",
  //   publishedAt: new Date(),
  // },
  // {
  //   id: Math.random(),
  //   title: "JavaScript data types and data structures",
  //   content:
  //     "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available...",
  //   publishedAt: new Date(),
  // },
  // {
  //   id: Math.random(),
  //   title: "JavaScript data types and data structures",
  //   content:
  //     "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available...",
  //   publishedAt: new Date(),
  // },
  // {
  //   id: Math.random(),
  //   title: "JavaScript data types and data structures",
  //   content:
  //     "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available...",
  //   publishedAt: new Date(),
  // },
];

export function App() {
  const [posts, setPosts] = useState(initialsPosts);

  return (
    <>
      <Header />
      <div className="wrapper-content">
        <UserInformation />
      </div>
      <SearchBar posts={posts} />

      {posts.length > 0 ? <Posts posts={posts} /> : <EmptyMessage />}
    </>
  );
}
