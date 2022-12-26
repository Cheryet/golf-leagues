import React from "react";
import "./CreateTeam.scss";
import { useState } from "react";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");

  return (
    <>
      <div className="new-team">
        <h1>Create Team</h1>
        <div className="new-team-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="team-name-input"
              type="text"
              placeholder="Enter New Team's Name"
              onChange={(e) => setTeamName(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTeam;
