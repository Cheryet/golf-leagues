import React from "react";

const PlayerItem = (props) => {
  return (
    <>
      <li className="player-list">
        <div className="player-container">
          <p>
            {props.lastname}, {props.firstname}
          </p>
          <p>HDCP: {props.handicap}</p>
        </div>
      </li>
    </>
  );
};

export default PlayerItem;
