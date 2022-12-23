import React from "react";

const PlayerItem = (props) => {
  return (
    <>
      <li>
        <div className="player-container">
          <p>
            {props.lastname}, {props.firstname} | HDCP: {props.handicap}
          </p>
        </div>
      </li>
    </>
  );
};

export default PlayerItem;
