const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 8001;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} 😁`);
});
