import React from "react";
import { useEffect } from "react";

const CreateLeague = () => {
  //Set Page Title
  useEffect(() => {
    document.title = "Golf Leagues | Create League";
  });

  return (
    <>
      <h1>Create Leagues</h1>
    </>
  );
};

export default CreateLeague;
