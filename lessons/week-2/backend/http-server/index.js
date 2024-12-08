const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("You have made a post call");
});

app.listen(port, () => {
  console.log(`We are listening on the port ${port}`);
});
