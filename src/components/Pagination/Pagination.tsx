import "./Pagination.css";

export function Pagination({ postsPerPage, totalPosts }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumber.map((number) => (
            <li className="page-item" key={number}>
              <a href="!#">{number}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
