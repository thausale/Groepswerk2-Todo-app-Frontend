import React from "react";
import ListName from "./ListName";

const MenuSection = ({ lists, children, labelName }) => {
  return (
    <>
      {lists && (
        <>
          <p className="menu-label">{labelName}</p>
          <ul className="menu-list">
            {lists.map((list) => (
              <ListName key={list.id} id={list.id} name={list.name} />
            ))}
            {children}
          </ul>
        </>
      )}
    </>
  );
};

export default MenuSection;
