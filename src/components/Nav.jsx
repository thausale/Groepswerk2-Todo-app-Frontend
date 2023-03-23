import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ back, settings, list }) => {
  return (
    <nav>
      <ul>
        {back && (
          <Link to="/">
            <li>
              <i className="fa-solid fa-angle-left"></i> Back
            </li>
          </Link>
        )}
        {list && list.id && settings && (
          <Link to={`/list/${list.id}/settings`} state={{ data: { list } }}>
            <li>
              <i className="fa-solid fa-ellipsis"></i>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
