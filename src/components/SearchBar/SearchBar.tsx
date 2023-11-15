import "./SearchBar.css";

export function SearchBar({ posts }) {
  const totalPosts = posts.length;
  return (
    <>
      <div className="search-bar">
        <div className="search-bar--header">
          <span className="search-title"> Publicações</span>
          <span className="search-total"> {totalPosts} Publicações</span>
        </div>

        <div className="search-input">
          <input type="text" placeholder="Pesquisar conteúdo" />
          <div className="create-post--button">
            <button>Criar Post</button>
          </div>
        </div>
      </div>
    </>
  );
}
