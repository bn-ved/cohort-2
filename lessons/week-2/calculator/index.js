const express = require("express");

const app = express();

function calculateSum(n) {
  return (n * (n + 1)) / 2;
}
app.get("/", (req, res) => {
  const n = req.query.n;
  const ans = calculateSum(n);
  res.send("Your answer is " + ans);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
