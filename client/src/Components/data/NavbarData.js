import React from "react";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export const NavbarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdIcons.MdOutlineSpaceDashboard />,
    cName: "nav-text",
  },
  {
    title: "Leagues",
    path: "/leagues",
    icon: <FaIcons.FaRegListAlt />,
    cName: "nav-text",
  },
  {
    title: "Teams",
    path: "/teams",
    icon: <GrIcons.GrGroup />,
    cName: "nav-text",
  },
  {
    title: "Players",
    path: "/players",
    icon: <BsIcons.BsPersonBadge />,
    cName: "nav-text",
  },
  {
    title: "Scores",
    path: "/scores",
    icon: <GrIcons.GrScorecard />,
    cName: "nav-text",
  },
];
