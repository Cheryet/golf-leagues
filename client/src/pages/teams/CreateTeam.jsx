import React from "react";
import "./CreateTeam.scss";
import { useState, useEffect } from "react";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [sponsorName, setSponsorName] = useState("");
  const [captainName, setCaptainName] = useState("");

  //Set Page Title
  useEffect(() => {
    document.title = "Golf Leagues | Create Team";
  });

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
            <label>Team Name: </label>
            <input
              className="team-name-input"
              name="team-name-input"
              type="text"
              placeholder="Enter New Team's Name"
              onChange={(e) => setTeamName(e.target.value)}
            />
            <label>Sponsors Name: </label>
            <input
              className="sponsor-name-input"
              name="sponsor-name-input"
              type="text"
              placeholder="Enter Sponsors Name"
              onChange={(e) => setSponsorName(e.target.value)}
            />
            <label>Captains Name: </label>
            <input
              className="captaian-name-input"
              name="captaian-name-input"
              type="text"
              placeholder="Enter Captains Name"
              onChange={(e) => setCaptainName(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTeam;
