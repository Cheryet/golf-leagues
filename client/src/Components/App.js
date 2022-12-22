import "./App.scss";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Leagues from "../pages/leagues/Leagues";
import CreateLeague from "../pages/leagues/CreateLeague";

function App() {
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
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
