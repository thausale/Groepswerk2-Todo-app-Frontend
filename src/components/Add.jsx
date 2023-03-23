import React, { useEffect, useState } from "react";

const Add = ({ placeholder, postValue, setPostValue, baseUrl }) => {
  const [input, setInput] = useState("");

  return (
    <div className="box p-0 is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center div has-icons-right sticky">
      <div className="control has-icons-left m-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.length > 0) {
              setPostValue(input);
            }
            setInput("");
          }}
        >
          <input
            className="input is-medium"
            type="text"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="button">Add</button>
        </form>
        <span className="icon is-small is-left">
          <i className="fa-solid fa-plus"></i>
        </span>
      </div>
      <button className="button m-3 is-medium">
        <span className="icon is-right">
          <i className="fa-solid fa-bars-staggered"></i>
        </span>
      </button>
    </div>
  );
};

export default Add;
