

CREATE TABLE players (
  id SERIAL PRIMARY KEY NOT NULL,
  team_id INTEGER,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  handicap INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT current_timestamp,
  updated_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  captain_id INTEGER REFERENCES players(id),
  sponsor_id INTEGER REFERENCES players(id),
  created_at TIMESTAMP DEFAULT current_timestamp,
  updated_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE scores (
  id SERIAL PRIMARY KEY NOT NULL,
  player_id INTEGER REFERENCES players(id) NOT NULL,
  score INTEGER NOT NULL,
  week INTEGER NOT NULL,
  front_nine BOOLEAN NOT NULL DEFAULT False,
  back_nine BOOLEAN NOT NULL DEFAULT False,
  created_at TIMESTAMP DEFAULT current_timestamp,
  updated_at TIMESTAMP DEFAULT current_timestamp
);