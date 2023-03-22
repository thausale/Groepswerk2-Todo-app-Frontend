import React from "react";
import ListItem from "./ListItem";

const ListSection = ({ lists, labelName, children }) => {
  return (
    <>
      {lists && lists.length > 0 && (
        <>
          <p className="menu-label">{labelName}</p>
          <ul className="menu-list">
            {lists.map((list) => (
              <ListItem
                status={labelName}
                key={list.id}
                id={list.id}
                name={list.name}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ListSection;
