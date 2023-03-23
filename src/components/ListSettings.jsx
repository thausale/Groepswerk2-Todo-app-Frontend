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
  const [listCategory, setListCategory] = useState(category_name || "");
  const [listCatId, setListCatId] = useState();
  const [allCats, setAllCats] = useState([]);

  const formData = new FormData();

  const [patchBody, setPatchBody] = useState(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("name", listName);
    formData.append("method", "PATCH");
    formData.append("important", listImportant);
    formData.append("color", listColor);
    formData.append("photo", listPhoto);
    formData.append("category_id", listCatId);
    setPatchBody(formData);
  };

  const patchList = async (body) => {
    const response = await axios.post(
      `https://s6.syntradeveloper.be/app/api/list/${id}`,
      body
    );
  };

  useEffect(() => {
    const currentCategory = allCats.find(
      (category) => category.name === listCategory
    );
    if (currentCategory) {
      setListCatId(currentCategory?.id);
    }
  }, [listCategory]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios("https://s6.syntradeveloper.be/app/api/categories");
        setAllCats(data.filter((cat) => cat.name !== ""));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
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

  return (
    <div className="container">
      <Link to={`/list/${id}`} className="button">
        Back to List
      </Link>
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
          <label htmlFor="imp" className="label" name="impCheck">
            Important
          </label>
          <div className="control">
            <input
              type="checkbox"
              checked={listImportant === 1}
              onChange={(e) => setListImportant(e.target.checked ? 1 : 0)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Photo</label>
          <div className="control">
            <InputComponent value={listPhoto} setValue={setListPhoto} />
          </div>
        </div>
        <div className="field">
          <label className="label">Category id</label>
          <div className="control">
            <select
              value={listCategory}
              onChange={(e) => setListCategory(e.target.value)}
            >
              <option value="">-- No category --</option>
              {allCats &&
                allCats.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
            </select>
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
    </div>
  );
};

export default ListSettings;
