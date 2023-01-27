import React from "react";
import "./CreateTeam.scss";
import * as BsIcon from "react-icons/bs";
import { useState, useEffect } from "react";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [sponsorName, setSponsorName] = useState("");
  const [captainName, setCaptainName] = useState("");
  const [submitError, setSubmitError] = useState(false);

  //Submit Handler
  const submit = () => {
    if (teamName & sponsorName & captainName) {
      //axios put request for new team
      setSubmitError(false);
      return console.log("sumbit");
    }

    setSubmitError(true);
  };

  //Set Page Title
  useEffect(() => {
    document.title = "Golf Leagues | Create Team";
  });

  return (
    <>
      <div className="new-team">
        <h1>Create Team</h1>
        <p className={submitError ? "submit-error active" : "submit-error"}>
          Error: Please Fill out all fields
        </p>
        <div className="new-team-container">
          <form
            className="new-team-form"
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
              value={teamName}
            />
            <label>Sponsors Name: </label>
            <input
              className="sponsor-name-input"
              name="sponsor-name-input"
              type="text"
              placeholder="Enter Sponsors Name"
              onChange={(e) => setSponsorName(e.target.value)}
              value={sponsorName}
            />
            <label>Captains Name: </label>
            <input
              className="captaian-name-input"
              name="captaian-name-input"
              type="text"
              placeholder="Enter Captains Name"
              onChange={(e) => setCaptainName(e.target.value)}
              value={captainName}
            />

            <button className="save-btn" type="submit" onClick={submit}>
              <BsIcon.BsCheckLg className="save-icon" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTeam;
