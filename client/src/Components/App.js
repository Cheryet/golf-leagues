import "./App.scss";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Leagues from "../pages/leagues/Leagues";
import CreateLeague from "../pages/leagues/CreateLeague";
import { useEffect, useState } from "react";
import axios from "axios";
import { RiContactsBookUploadLine } from "react-icons/ri";
import Teams from "../pages/teams/Teams";
import CreateTeam from "../pages/teams/CreateTeam";

function App() {
  //Initial State Declaration
  const [state, setState] = useState({
    teams: {},
    players: {},
    scores: {},
  });

  useEffect(() => {
    //Ajax Get request for data
    const teamsPromise = axios.get("/api/teams");
    const playersPromise = axios.get("/api/players");
    const scoresPromise = axios.get("/api/scores");

    Promise.all([teamsPromise, playersPromise, scoresPromise]).then((all) => {
      setState((prev) => ({
        ...prev,
        teams: all[0].data,
        players: all[1].data,
        scores: all[2].data,
      }));
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/leagues"}>
            <Route index element={<Leagues />} />
            <Route path={"create"} element={<CreateLeague />} />
          </Route>
          <Route path={"/teams"}>
            <Route
              index
              element={<Teams teams={state.teams} players={state.players} />}
            />
            <Route path={"create"} element={<CreateTeam />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
