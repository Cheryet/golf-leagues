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
    subnav: [
      {
        title: "My Leagues",
        path: "/leagues",
      },
      {
        title: "Create new League",
        path: "/leagues/create",
      },
    ],
  },
  {
    title: "Teams",
    path: "/teams",
    icon: <BsIcons.BsPeople />,
    cName: "nav-text",
    subnav: [
      {
        title: "My Teams",
        path: "/teams",
      },
      {
        title: "Create Team",
        path: "/teams/create",
      },
    ],
  },
  {
    title: "Players",
    path: "/players",
    icon: <BsIcons.BsPersonBadge />,
    cName: "nav-text",
    subnav: [
      {
        title: "My Players",
        path: "/players",
      },
      {
        title: "Add Player",
        path: "/players/create",
      },
    ],
  },
  {
    title: "Scores",
    path: "/scores",
    icon: <BsIcons.BsFileBarGraph />,
    cName: "nav-text",
    subnav: [
      {
        title: "History",
        path: "/scores",
      },
      {
        title: "Add Score",
        path: "/scores/create",
      },
    ],
  },
];
