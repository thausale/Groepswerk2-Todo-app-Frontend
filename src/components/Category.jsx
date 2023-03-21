import React from "react";

const Category = ({ children, id, name }) => {
  return (
    <>
      <li key={id}>
        <a>
          <span className="icon-text">
            <span className="icon">
              <i className="fa-solid fa-bars-staggered"></i>
            </span>
            <span>{name}</span>
          </span>
        </a>
        <ul>{children}</ul>
      </li>
    </>
  );
};

export default Category;
