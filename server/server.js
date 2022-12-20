const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./database");

// ~~ MIDDLEWARE ~~
const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

// ~~ ROUTES ~~

// ~ HOME ROUTE ~
app.get("/", (req, res) => {
  res.send("Hello from server");
});

// ~ PLAYERS ROUTES ~

//Get All Players
app.get("/api/players", (req, res) => {
  db.getAllPlayers().then((data) => {
    const players = data;
    res.send(players);
  });
});

//Get players by Id
app.get("/api/players/:id", (req, res) => {
  db.getPlayerById(req.params.id).then((data) => {
    const player = data;
    res.send(player);
  });
});

// ~ TEAMS ROUTES ~

app.get("/api/teams", (req, res) => {
  db.getAllTeams().then((data) => {
    const teams = data;
    res.send(teams);
  });
});

//Get players by team ID
app.get("/api/teams/:team_id", (req, res) => {
  db.getTeamPlayers(req.params.team_id).then((data) => {
    const teamPlayers = data;
    res.send(teamPlayers);
  });
});

// ~ SCORES ROUTES ~

app.get("/api/scores", (req, res) => {
  db.getAllScores().then((data) => {
    const scores = data;
    res.send(scores);
  });
});

app.get("/api/scores/:player_id", (req, res) => {
  db.getTeamPlayers(req.params.team_id).then((data) => {
    const playersScores = data;
    res.send(playersScores);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} 😁`);
});
