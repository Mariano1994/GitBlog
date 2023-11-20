import { Header } from "./components/Header/Header";
import { UserInformation } from "./components/UserInformation/UserInformation";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Posts } from "./components/Posts/Posts";
import { useEffect, useState } from "react";
import { EmptyMessage } from "./components/EmptyMessage/EmptyMessage";

export function App() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  // Functon to get query fot searching
  function handleSetQuery(event) {
    setQuery(event.target.value);
  }

  // This function is used to get all repos from gitHub and filter them according to query(seacrh content). The funtion return anly the content(description) that matches the query. Is not get any content that maches the return an ampty array.
  const filteredPostList = posts.filter((post) => {
    return post.description?.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    async function getReposInfo() {
      const repos = await fetch(
        "https://api.github.com/users/Mariano1994/repos"
      );
      const repoData = await repos.json();
      setPosts(repoData);
    }
    getReposInfo();
  }, []);

  return (
    <>
      <Header />
      <div className="wrapper-content">
        <UserInformation />
      </div>
      <SearchBar
        posts={posts}
        query={query}
        onSetQuery={handleSetQuery}
        filteredPostList={filteredPostList}
      />

      {posts.length > 0 ? (
        <Posts
          posts={posts}
          query={query}
          filteredPostList={filteredPostList}
        />
      ) : (
        <EmptyMessage />
      )}
    </>
  );
}
