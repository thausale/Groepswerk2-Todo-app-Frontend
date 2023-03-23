import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ back, settings }) => {
  return (
    <nav>
      <ul>
        {back && (
          <Link to="/">
            <li>
              <i class="fa-solid fa-angle-left"></i> Back
            </li>
          </Link>
        )}
        {settings && (
          <Link>
            <li>
              <i class="fa-solid fa-ellipsis"></i>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
