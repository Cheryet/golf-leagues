import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as RiIcons from "react-icons/ri";
import SubnavItem from "./SubnavItem";

const NavbarItem = (props) => {
  //Subnav state
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };

  //Remove null from props

  return (
    <>
      {props.subnav ? (
        <>
          <li
            className={subnav ? props.className + " active" : props.className}
          >
            <Link onClick={showSubnav}>
              {props.icon}
              <span>{props.title}</span>
              <RiIcons.RiArrowDropDownLine className="subnav-arrow" />
            </Link>
          </li>
          <div className={subnav ? "subnav-list active" : "subnav-list"}>
            <SubnavItem subnav={props.subnav} />
          </div>
        </>
      ) : (
        <li className={props.className}>
          <Link to={props.path}>
            {props.icon}
            <span>{props.title}</span>
          </Link>
        </li>
      )}
    </>
  );
};

export default NavbarItem;
