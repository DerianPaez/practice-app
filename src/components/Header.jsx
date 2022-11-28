import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import { Navbar } from "./Navbar";
// import { useState } from "react";

export const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <header className="flex justify-between items-center p-5 lg:p-10">
      <figure>
        <img className="w-32" src={Logo} alt="Logo" />
      </figure>

      <figure>
        <img onClick={handleClicked} className="w-6 md:hidden" src={Menu} />
      </figure>

      <Navbar handleClicked={handleClicked} clicked={clicked} />
    </header>
  );
};
