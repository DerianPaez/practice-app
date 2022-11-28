import React from "react";
import { NavLink } from "react-router-dom";

export const NavItem = ({ to, text, handleClicked }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${isActive ? "text-white" : "text-gray"} text-lg`
        }
        onClick={handleClicked}
      >
        {text}
      </NavLink>
    </>
  );
};
