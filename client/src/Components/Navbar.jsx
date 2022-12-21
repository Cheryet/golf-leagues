import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import { NavbarData } from "./data/NavbarData";

function Navbar() {
  //Side bar State
  const [sidebar, setSidebar] = useState(false);

  //Helper - Set Sidebar State
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  //Helper - Nav Items from array
  const navItems = NavbarData.map((item, index) => {
    return (
      <li key={index} className={item.cName}>
        {item.icon}
        <span>{item.title}</span>
      </li>
    );
  });

  return (
    <>
      <div className="navbar">
        <FaIcons.FaBars />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <GrIcons.GrClose />
          </li>
          {navItems}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
