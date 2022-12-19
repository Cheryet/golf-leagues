const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./database");

// ~ MIDDLEWARE ~
const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

// ~ ROUTES ~

app.get("/", (req, res) => {
  res.send("Hello from server");
});

//Get All Players (JSON)
app.get("/players", (req, res) => {
  db.getAllPlayers().then((data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} 😁`);
});
