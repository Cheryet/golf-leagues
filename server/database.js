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

module.exports = {
  getAllPlayers,
  getPlayerById,
  getTeamPlayers,
  getAllTeams,
  getPlayerScores,
  getAllScores,
};
