import React from "react";
import { useEffect } from "react";
import "./Dashboard.scss";

const Dashboard = () => {
  //Set Page Title
  useEffect(() => {
    document.title = "Golf Leagues | Dashboard";
  });
  return <h1>Dashboard 📊</h1>;
};

export default Dashboard;
