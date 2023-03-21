import React from "react";
import { Link } from "react-router-dom";

const ListName = ({ id, name }) => {
  return (
    // <Link key={id} to={`/list/${id}`}>
    <li listId={id}>
      <a>
        <span className="icon-text">
          <span className="icon">
            <i className="fa-solid fa-list-ul"></i>
          </span>
          <span>{name}</span>
        </span>
      </a>
    </li>
    // </Link>
  );
};

export default ListName;
