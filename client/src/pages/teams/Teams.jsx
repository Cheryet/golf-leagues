import React from "react";
import { BsLayoutTextWindow } from "react-icons/bs";
import TeamItem from "./TeamItem";
import * as AiIcons from "react-icons/ai";
import "./Teams.scss";

const Teams = (props) => {
  //Helper - Gets all Teams
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

  return (
    <>
      <section className="teams-menu">
        <div className="btn-container">
          <AiIcons.AiOutlinePrinter className="print-all-icon" />
          <button className="print-all-btn">Print all Teams</button>
        </div>
      </section>
      {teams}
    </>
  );
};

export default Teams;
