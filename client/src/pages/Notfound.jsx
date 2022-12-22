import React from "react";
import { useEffect } from "react";
import "./Notfound.scss";

const Notfound = () => {
  useEffect(() => {
    document.title = "Golf Leagues | 404 not found";
  });

  return (
    <>
      <h1>404 | Page not found 😢</h1>
      <p>Please use a vaild URL</p>
    </>
  );
};

export default Notfound;
