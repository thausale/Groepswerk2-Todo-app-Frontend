import React from "react";

const Add = ({ placeholder }) => {
  return (
    <div className="box p-0 is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center div has-icons-right sticky">
      <p className="control has-icons-left m-3">
        <input
          className="input is-medium"
          type="text"
          placeholder={placeholder}
        />
        <span className="icon is-small is-left">
          <i className="fa-solid fa-plus"></i>
        </span>
      </p>
      <button className="button m-3 is-medium">
        <span className="icon is-right">
          <i className="fa-solid fa-bars-staggered"></i>
        </span>
      </button>
    </div>
  );
};

export default Add;
