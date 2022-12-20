const { Pool } = require("pg");

// New Client for DB
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE || "golf_leagues",
});

// ~~ PLAYERS QUERIES ~~

const getAllPlayers = () => {
  return pool
    .query(`SELECT * FROM players`)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getPlayerById = (id) => {
  return pool
    .query(`SELECT * FROM players WHERE id = $1`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const addPlayer = (team_id, first_name, last_name, email, handicap) => {
  return pool.query(
    `INSERT INTO players (team_id, first_name, last_name, email, handicap) VALUES ($1, $2, $3, $4, $5)`,
    [team_id, first_name, last_name, email, handicap]
  );
};

const removePlayer = (player_id) => {
  return pool.query(`DELETE FROM players WHERE id = $1`, [player_id]);
};

//  ~~ TEAMS QUERIES ~~

const getAllTeams = () => {
  return pool
    .query(`SELECT * FROM teams`)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getTeamPlayers = (teamId) => {
  return pool
    .query(
      `SELECT * FROM players JOIN teams ON team_id = teams.id WHERE team_id = $1`,
      [teamId]
    )
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const addTeam = (name, captain_id, sponsor_id) => {
  return pool.query(
    `INSERT INTO teams (name, captain_id, sponsor_id) VALUES ($1, $2, $3)`,
    [name, captain_id, sponsor_id]
  );
};

const removeTeam = (team_id) => {
  return pool.query(`DELETE FROM teams WHERE id = $1`, [team_id]);
};

//  ~~ SCORES QUERIES ~~

const getAllScores = () => {
  return pool
    .query(`SELECT * FROM scores`)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getPlayerScores = (playerId) => {
  return pool
    .query(`SELECT * FROM scores WHERE player_id = $1`, [playerId])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const addScore = (player_id, score, week, front_nine, back_nine) => {
  return pool.query(
    `INSERT INTO scores (player_id, score, week, front_nine, back_nine) VALUES ($1, $2, $3, $4, $5)`,
    [player_id, score, week, front_nine, back_nine]
  );
};

const removeScore = (score_id) => {
  return pool.query(`DELETE FROM scores WHERE id = $1`, [score_id]);
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  getTeamPlayers,
  getAllTeams,
  getPlayerScores,
  getAllScores,
  addPlayer,
  addTeam,
  addScore,
  removePlayer,
  removeTeam,
  removeScore,
};
