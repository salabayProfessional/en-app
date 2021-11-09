import React, { useState } from 'react';
import './Pagination'
const Pagination: React.FC<{setNextRes: any , nextRes?: any, list: number}> = ({
  setNextRes,
  list,
}) => {
  const [active, setActive] = useState(0);

  const muchPagination = list / 12;

  let listPagination = [];

  for(let i = 1; i < muchPagination+1; i++) {
    listPagination.push((
      <li className={`page-item ${active === i && "active"}`} onClick={() => {
        setActive(i);
        setNextRes(i * 12);
      }}>
        <span className="page-link">{i}</span>
      </li>
    ))
  }

  return (
    <ul className="pagination">
      <li className="page-item">
        <span className="page-link">&laquo;</span>
      </li>
      {
        listPagination
      }
      <li className="page-item">
        <span className="page-link">&raquo;</span>
      </li>
    </ul>
  )
}

export default Pagination;
