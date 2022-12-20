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

module.exports = {
  getAllPlayers,
  getPlayerById,
};
