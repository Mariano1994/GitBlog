import "./SearchBar.css";
export function SearchBar({ query, onSetQuery, filteredPostList }) {
  const totalPosts = filteredPostList.length;

  return (
    <>
      <div className="search-bar">
        <div className="search-bar--header">
          <span className="search-title"> Publicações</span>
          <span className="search-total">
            {" "}
            {totalPosts} {totalPosts === 1 ? "Plublicação" : "Publicações"}
          </span>
        </div>

        <div className="search-input">
          <input
            value={query}
            onChange={onSetQuery}
            type="search"
            placeholder="Pesquisar conteúdo"
          />
        </div>
      </div>
    </>
  );
}
