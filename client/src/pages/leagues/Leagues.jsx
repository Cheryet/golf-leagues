import React from "react";
import { useEffect } from "react";

const Leagues = () => {
  //Set Page Title
  useEffect(() => {
    document.title = "Golf Leagues | Leagues";
  });

  return (
    <>
      <h1>Leagues</h1>
    </>
  );
};

export default Leagues;
