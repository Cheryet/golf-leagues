import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { NavbarData } from "./data/NavbarData";
import { IconContext } from "react-icons";
import "./Navbar.scss";
import Profile from "./Profile";
import NavbarItem from "./NavbarItem";

function Navbar() {
  //Side bar State
  const [sidebar, setSidebar] = useState(false);

  //Set Sidebar State
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  //Helper - Nav Items from array
  const navItems = NavbarData.map((item, index) => {
    return (
      <NavbarItem
        key={index}
        className={item.cName}
        path={item.path}
        icon={item.icon}
        title={item.title}
        subnav={item.subnav ? item.subnav : null}
      />
    );
  });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className={sidebar ? "nav-title active" : "nav-title"}>
            Golf Leagues
          </h1>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            <li>
              <Profile />
            </li>
            {navItems}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
