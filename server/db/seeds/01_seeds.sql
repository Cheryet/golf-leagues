
INSERT INTO players (team_id, first_name, last_name, email, handicap)
VALUES
(1, 'Corbin', 'Heryet', 'C.Heryet@outlook.com', 9.5),
(1, 'John', 'Doe', 'JDoe@example.com', 2.3),
(2, 'Billy', 'McNight', 'Nighty@example.com', 14)

INSERT VALUES teams (name, captain_id, sponsor_id)
VALUES 
("Darter's", 1, 1)
("Hooker's", 2, 3)

INSERT VALUES scores (player_id, score, week, front_nine, back_nine)
VALUES
(1, 40, 1, true, false)
