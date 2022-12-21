import React from "react";
import "./Profile.scss";

const Profile = () => {
  return (
    <section className="profile-container">
      <div className="profile-img"></div>
      <p className="profile-username">Lethbridge Country Club</p>
      <p className="profile-leagues">Leagues: 2</p>
      <p className="profile-players">Players: 87</p>
    </section>
  );
};

export default Profile;
