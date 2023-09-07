import React from "react";

const Pagination = ({ productPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="d-flex mt-5 justify-content-center p-0 pagination-nav w-50 mx-auto">
      <ul className="pagination text-end" >
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item" >
              <a
                href="#"
                className="page-link"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;