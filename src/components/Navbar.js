import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "20px" }}>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/top-news" className="nav-link">
            Top News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
