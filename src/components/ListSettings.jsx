import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ListSettings = () => {
  const location = useLocation();
  const {
    data: { list },
  } = location.state;
  const { name, color, photo, important, category_name } = list;

  const [listName, setListName] = useState(name);
  const [listColor, setListColor] = useState(color);
  const [listPhoto, setListPhoto] = useState(photo);
  const [listImportant, setListImportant] = useState(important);
  const [listCategory, setListCategory] = useState(category_name);
  const { id } = useParams();

  console.log(list);

  return (
    <form>
      <input
        type="text"
        value={listName}
        onChange={(e) => {
          setListName(e.target.value);
        }}
      />
      {/* MAKE INPUT COMPONENT HERE, pass along the value, setvalue & possibly
      type */}
    </form>
  );
};

export default ListSettings;
