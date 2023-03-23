import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import InputComponent from "./InputComponent.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

const ListSettings = () => {
  const location = useLocation();
  const {
    data: { list },
  } = location.state;
  // console.log(list);

  const { name, color, photo, important, category_name, id } = list;

  const [listName, setListName] = useState(name);
  const [listColor, setListColor] = useState(color);
  const [listPhoto, setListPhoto] = useState(photo || "nothing yet");
  const [listImportant, setListImportant] = useState(important || 0);
  const [listCategory, setListCategory] = useState(
    category_name || "No category set"
  );
  const formData = new FormData();

  const [patchBody, setPatchBody] = useState(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("name", listName);
    formData.append("method", "PATCH");
    formData.append("important", listImportant);
    formData.append("color", listColor);
    formData.append("photo", listPhoto);
    setPatchBody(formData);
  };

  const patchList = async (body) => {
    const response = await axios.post(
      `https://s6.syntradeveloper.be/app/api/list/${id}`,
      body
    );
    console.log(response);
  };

  useEffect(() => {
    console.log(patchBody);
    if (
      patchBody.has("name") &&
      patchBody.has("important") &&
      patchBody.has("color") &&
      patchBody.has("photo") &&
      patchBody.has("method")
    ) {
      patchList(patchBody);
    }
  }, [patchBody]);

  // const { id } = useParams();

  // console.log(list);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">List Name</label>
          <div className="control">
            <InputComponent value={listName} setValue={setListName} />
          </div>
        </div>
        <div className="field">
          <label className="label">List Color</label>
          <div className="control">
            <InputComponent value={listColor} setValue={setListColor} />
          </div>
        </div>
        <div className="field">
          <label className="label">Photo</label>
          <div className="control">
            <InputComponent value={listPhoto} setValue={setListPhoto} />
          </div>
        </div>
        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <InputComponent value={listCategory} setValue={setListCategory} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Link to={`/list/${id}`} className="button">
        Back to List
      </Link>
    </div>
  );
};

export default ListSettings;
