const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./database");
const { json } = require("express");

// ~~ MIDDLEWARE ~~
const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

// ~~ ROUTES ~~

// ~ HOME ROUTE ~
app.get("/", (req, res) => {
  res.send("Hello from server 👋🏼");
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

//Add a player
app.put("/api/players/:id", (req, res) => {
  console.log("req body: ", req.body);
  db.addPlayer(
    req.body.team_id,
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.handicap
  )
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => {
      console.log(error);
    });
});

//Delete player
app.delete("/api/players/:id", (req, res) => {
  db.removePlayer(req.body.player_id).then(() => {
    res.status(204).json();
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

//Add team
app.put("/api/teams/:team_id", (req, res) => {
  console.log("Req Body: ", req.body);
  db.addTeam(req.body.name, req.body.captain_id, req.body.sponsor_id)
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => {
      console.log(error);
    });
});

//Delete team
app.delete("/api/teams/:team_id", (req, res) => {
  db.removeTeam(req.body.team_id).then(() => {
    res.status(204).json();
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
  db.getPlayerScores(req.params.team_id).then((data) => {
    const playersScores = data;
    res.send(playersScores);
  });
});

app.put("/api/scores", (req, res) => {
  db.addScore(
    req.body.player_id,
    req.body.score,
    req.body.week,
    req.body.front_nine,
    req.body.back_nine
  )
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete("/api/scores", (req, res) => {
  db.removeScore(req.body.score_id).then(() => {
    res.status(204).json();
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} 😁`);
});
