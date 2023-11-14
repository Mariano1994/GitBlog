import './SearchBar.css'
export function SearchBar() {
  return (
    <>
      <div className="search-bar">
        <div className="search-bar--header">
          <span className="search-title"> Publicações</span>
          <span className="search-total"> 3 Publicações</span>
        </div>

        <div className="search-input">
          <input type="text" placeholder="Pesquisar conteúdo"/>
        </div>

      </div>   
    </>
  )
}