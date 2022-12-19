const { Pool } = require("pg");

// New Client for DB
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE || "golf_leagues",
});

// Gets all players
const getAllPlayers = () => {
  return pool
    .query(`SELECT * FROM players`)
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
};
