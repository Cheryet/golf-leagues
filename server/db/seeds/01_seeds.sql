
INSERT INTO players (team_id, first_name, last_name, email, handicap)
VALUES
(1, 'Corbin', 'Heryet', 'C.Heryet@outlook.com', 9.5),
(1, 'John', 'Doe', 'JDoe@example.com', 2.3),
(2, 'Billy', 'McNight', 'Nighty@example.com', 14);

INSERT INTO teams (name, captain_id, sponsor_id)
VALUES 
('Darters', 1, 1),
('Hookers', 2, 3);

INSERT INTO scores (player_id, score, week, front_nine, back_nine)
VALUES
(1, 40, 1, true, false);
