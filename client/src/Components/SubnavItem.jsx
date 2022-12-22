import React from "react";
import { Link } from "react-router-dom";

const SubnavItem = (props) => {
  //Gets subnav items
  const subnavItems = props.subnav.map((subItem, index) => {
    return (
      <Link to={subItem.path} key={index}>
        <span>{subItem.title}</span>
      </Link>
    );
  });
  return <>{subnavItems}</>;
};

export default SubnavItem;
