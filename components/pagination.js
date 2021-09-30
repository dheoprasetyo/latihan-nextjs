import React, { useEffect, useState } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
//   const [showPrev, setPrev] = useState(false);
//   const [showNext, setNext] = useState(false);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

//   const prev = () => (
//     <a onClick={() => paginate(currentPage - 1)}>
//       Prev
//     </a>
//   );
//   const next = () => (
//     <a onClick={() => paginate(currentPage + 1)}>
//       Next
//     </a>
//   );

//   useEffect(() => {
//     if (currentPage - 1 > 0) {
//       setPrev(true);
//     } else {
//       setPrev(false);
//     }

//     if (currentPage !== pageNumbers.length) {
//       setNext(true);
//     } else {
//       setNext(false);
//     }
//   }, [currentPage, pageNumbers.length]);

//   const liRender = number => (
//     <li key={number} className="page-item">
//       <a onClick={() => paginate(number)} className="page-link">
//         {number}
//       </a>
//     </li>
//   );

  return (
    <nav>
      {/* {showPrev && prev()} */}
      <ul className="pagination justify-content-end my-3">
        {pageNumbers.map(number => {
        //   if (currentPage === number) {
            return (
              <li key={number} className="page-item">
                <a
                  onClick={() => paginate(number)}
                  
                  className="page-link  page-item-active"
                >
                  {number}
                </a>
              </li>
            );
        //   }

        //   return liRender(number);
        })}
      </ul>
      {/* {showNext && next()} */}
    </nav>
  );
};

export default Pagination;