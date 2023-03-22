import React from "react";
import ListItem from "./ListItem";

const ListSection = ({
  handledCheck,
  setHandledCheck,
  lists,
  labelName,
  children,
}) => {
  return (
    <>
      {lists && lists.length > 0 && (
        <>
          <p className="menu-label">{labelName}</p>
          <ul className="menu-list">
            {lists.map((list) => (
              <ListItem
                setHandledCheck={setHandledCheck}
                handledCheck={handledCheck}
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
