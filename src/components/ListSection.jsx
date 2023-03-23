import React, { useState } from "react";
import ListItem from "./ListItem";

const ListSection = ({
  handledCheck,
  setHandledCheck,
  lists,
  labelName,
  children,
}) => {
  const [hide, setHide] = useState(false);
  const chevron = hide ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up";
  return (
    <>
      {lists && lists.length > 0 && (
        <>
          <p onClick={() => setHide(!hide)} className="menu-label click">
            <span>{labelName}</span>
            <i className={chevron}></i>
          </p>
          <ul className="menu-list">
            {lists.map((list) => (
              <ListItem
                setHandledCheck={setHandledCheck}
                handledCheck={handledCheck}
                status={labelName}
                key={list.id}
                id={list.id}
                name={list.name}
                hide={hide}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ListSection;
