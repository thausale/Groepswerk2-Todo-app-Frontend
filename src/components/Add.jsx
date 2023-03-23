import React, { useEffect, useState } from "react";
import Form from "./Form";

const Add = ({ placeholder, setPostValue, catBtn, setCatPostValue }) => {
  const [input, setInput] = useState("");
  const [catInputField, setCatInputField] = useState(false);

  return (
    <>
      {catInputField && (
        <div className="box p-0 is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center div catInput has-icons-right sticky">
          <Form
            placeholder="Add category"
            hiddenClass={!catInputField}
            setCatInputField={setCatInputField}
            setPostValue={setCatPostValue}
          ></Form>
        </div>
      )}
      <div className="box p-0 is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center div has-icons-right sticky">
        <div className="control has-icons-left m-3">
          <Form placeholder={placeholder} setPostValue={setPostValue}></Form>
          <span className="icon is-small is-left">
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
        {catBtn && (
          <button
            onClick={() => {
              setCatInputField(!catInputField);
            }}
            className="button m-3 is-medium"
          >
            <span className="icon is-right">
              <i className="fa-solid fa-bars-staggered"></i>
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default Add;
