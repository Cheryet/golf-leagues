import React from "react";
import { useEffect } from "react";
import "./Home.scss";

const Home = () => {
  //Set Page Title
  useEffect(() => {
    document.title = "Golf Leagues | Home";
  });

  return <h1>Home 🏠</h1>;
};

export default Home;
