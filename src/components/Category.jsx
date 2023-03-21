import React from "react";
import ListName from "./ListName";

const Category = ({ cats, listsWCat }) => {
  console.log(cats);
  return (
    <>
      {cats &&
        cats.map((cat) => (
          <li key={cat.id}>
            <a>
              <span className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-bars-staggered"></i>
                </span>
                <span>{cat.name}</span>
              </span>
            </a>
            <ul>
              {listsWCat
                .filter((list) => list.category_name == cat.name)
                .map((list) => (
                  <ListName key={list.id} id={list.id} name={list.name} />
                ))}
            </ul>
          </li>
        ))}
    </>
  );
};

export default Category;
