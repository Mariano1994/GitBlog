import { Header } from "./components/Header/Header";
import { UserInformation } from "./components/UserInformation/UserInformation";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Posts } from "./components/Posts/Posts";
import { ChangeEvent, useEffect, useState } from "react";
import { EmptyMessage } from "./components/EmptyMessage/EmptyMessage";
import { Pagination } from "./components/Pagination/Pagination";

export function App() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  // Functon to get query fot searching
  function handleSetQuery(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  // This function is used to get all repos from gitHub and filter them according to query(seacrh content). The funtion return anly the content(description) that matches the query. Is not get any content that maches the return an ampty array.
  const filteredPostList = posts.filter((post) => {
    return post.description?.toLowerCase().includes(query.toLowerCase());
  });

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = filteredPostList.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  function paginate(pageNumber: any) {
    setCurrentPage(pageNumber);
  }

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
        filteredPostList={currentPost}
      />

      {posts.length > 0 ? (
        <Posts posts={posts} query={query} filteredPostList={currentPost} />
      ) : (
        <EmptyMessage />
      )}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPostList.length}
        paginate={paginate}
      />
    </>
  );
}
