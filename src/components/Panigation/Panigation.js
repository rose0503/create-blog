import React from "react";

const Panigation = ({ postsPerPage, totalPosts, paninate }) => {
  const panigationSize = Math.ceil(totalPosts / postsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= panigationSize; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          {pageNumbers.map(number => (
            <li key={number} class="page-item">
              <a onClick={() => paninate(number)} class="page-link" href="#">
                {number}
              </a>
            </li>
          ))}
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Panigation;
