import React from "react";
import TeamItem from "./TeamItem";
import "./Teams.scss";

const Teams = (props) => {
  return (
    <>
      <TeamItem teams={props.teams} />
    </>
  );
};

export default Teams;
