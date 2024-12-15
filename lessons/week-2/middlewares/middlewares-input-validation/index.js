const express = require("express");
const app = express();

// Extract Json Body from the request
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("You have" + kidneyLength + " kidneys");
});

app.use((err, req, res, next) => {
  res.statusCode = 500;
  res.send("Internal Server Error.");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
