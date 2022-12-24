import React from "react";
import PlayerItem from "./PlayerItem";
import * as AiIcons from "react-icons/ai";

const TeamItem = (props) => {
  //
  //Helper - Gets teams players from state
  const getTeamPlayers = (team_id) => {
    const players = [];

    props.players.forEach((player) => {
      if (player.team_id === team_id) {
        players.push(player);
      }
    });

    return players;
  };

  //Helper - Gets players on team
  const teamPlayers = getTeamPlayers(props.team_id).map((player, index) => {
    return (
      <PlayerItem
        key={index}
        firstname={player.first_name}
        lastname={player.last_name}
        handicap={player.handicap}
      />
    );
  });

  //Helper - Gets Player By player_id
  const getPlayerById = (player_id) => {
    let playerResult = {};

    props.players.forEach((player) => {
      if (player.player_id === player_id) {
        playerResult = player;
      }
    });

    return playerResult;
  };

  //Assign Captain/Sponsor
  const sponsor = getPlayerById(props.sponsor_id);
  const captain = getPlayerById(props.captain_id);

  return (
    <>
      <div className="team-item">
        <h2 className="team-title">{props.name}</h2>
        <div className="team-text">
          <p>
            Sponsor: {sponsor.first_name} {sponsor.last_name}
          </p>
          <p>
            Captain: {captain.first_name} {captain.last_name}
          </p>
          <div className="player-list-container">
            <ul className="player-list">{teamPlayers}</ul>
          </div>
        </div>
        <div className="print-icon">
          <AiIcons.AiOutlinePrinter />
        </div>
      </div>
    </>
  );
};

export default TeamItem;
