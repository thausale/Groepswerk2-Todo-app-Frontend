import React from "react";

const ListSection = () => {
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

export default ListSection;
