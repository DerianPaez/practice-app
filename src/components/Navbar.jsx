import React from "react";
import { NavItem } from "./NavItem";
import Close from "../assets/close.svg";

export const Navbar = ({ clicked, handleClicked }) => {
  return (
    <nav
      className={`${
        clicked ? "top-0" : "-top-full"
      } bg-primary fixed bottom-0 right-0 left-0 flex justify-center items-center text-center w-screen h-screen ease-in duration-300 md:static md:text-start md:w-auto md:h-auto`}
    >
      <figure className="absolute top-7 right-6 md:hidden">
        <img onClick={handleClicked} src={Close} alt="" />
      </figure>
      <ul className="grid gap-7 md:grid-cols-nav">
        <li>
          <NavItem handleClicked={handleClicked} to="/" text="Home" />
        </li>
        <li>
          <NavItem
            handleClicked={handleClicked}
            to="/about-us"
            text="About Us"
          />
        </li>
        <li>
          <NavItem
            handleClicked={handleClicked}
            to="/features"
            text="Features"
          />
        </li>
        <li>
          <NavItem
            handleClicked={handleClicked}
            to="/solution"
            text="Solution"
          />
        </li>
      </ul>
    </nav>
  );
};
