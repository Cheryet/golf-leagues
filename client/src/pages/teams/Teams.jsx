import React from "react";
import TeamItem from "./TeamItem";
import "./Teams.scss";

const Teams = (props) => {
  const teams = props.teams.map((item, index) => {
    return (
      <TeamItem
        key={index}
        team_id={item.id}
        name={item.name}
        caption={item.caption_id}
        sponsor={item.sponsor_id}
        players={props.players}
      />
    );
  });

  return <>{teams}</>;
};

export default Teams;
