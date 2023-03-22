import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ id, name, status }) => {
  const klasse =
    status === "checked"
      ? "fa-regular fa-circle-check"
      : status === "unchecked"
      ? "fa-regular fa-circle"
      : null;
  return (
    <Link to={`/list/${id}`}>
      <li key={id} id={id}>
        <span className="icon-text">
          <span className="icon">
            <i className={klasse}></i>
          </span>
          <span>{name}</span>
        </span>
      </li>
    </Link>
  );
};

export default ListItem;
