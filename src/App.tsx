import { Header } from "./components/Header/Header";
import { UserInformation } from "./components/UserInformation/UserInformation";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Posts } from "./components/Posts/Posts";
import { useEffect, useState } from "react";
import { EmptyMessage } from "./components/EmptyMessage/EmptyMessage";



export function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getReposInfo() {
      const repos = await fetch(
        "https://api.github.com/users/Mariano1994/repos"
      )
      const repoData = await repos.json()
      setPosts(repoData)

    }
    getReposInfo()
  }, []);

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
