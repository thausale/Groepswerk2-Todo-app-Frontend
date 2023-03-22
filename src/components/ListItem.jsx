import React from "react";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";
const baseUrl = config.apiBaseUrl;

const ListItem = ({ id, name, status, handledCheck, setHandledCheck }) => {
  let klasse;
  let resource;
  if (status === "checked") {
    klasse = "fa-regular fa-circle-check";
    resource = "uncheck";
  } else if (status === "unchecked") {
    klasse = "fa-regular fa-circle";
    resource = "check";
  }

  const handleCheck = async () => {
    try {
      await axios.patch(`${baseUrl}/${resource}/${id}`);
      setHandledCheck(!handledCheck);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Link onClick={handleCheck}>
      <li key={id} id={id}>
        <span className="icon-text">
          <span className="icon">
            <i className={klasse}></i>
          </span>
          <span>{name}</span>
        </span>
      </li>
    </Link>
  );
};

export default ListItem;
