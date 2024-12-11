const express = require("express");

const app = express();

// to extract the body as JSON.
app.use(express.json());

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// Get Kidneys
app.get("/", (req, res) => {
  const kidneys = users[0].kidneys;
  const numberOfKidneys = kidneys.length;
  const numberOfHealthyKidneys = kidneys.filter(
    (kidney) => kidney.healthy,
  ).length;
  const numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberofUnhealthyKidneys,
  });
});

// Add kidneys
app.post("/", (req, res) => {
  const kidney = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: kidney,
  });
  res.json({
    msg: "Done!",
  });
});

// Make all unhealthy kidneys healthy.
app.put("/", (req, res) => {
  const healthyKidneys = users[0].kidneys.filter(
    (kidney) => kidney.healthy,
  ).length;

  // Return 411 if there are no unhealthy kidneys
  if (healthyKidneys === users[0].kidneys.length) {
    res.statusCode = 411;
    res.json({
      msg: "You have no unhealthy kidneys.",
    });
    return;
  }
  users[0].kidneys.map((kidney) => {
    return (kidney.healthy = true);
  });
  res.json({
    msg: "Done!",
  });
});

// Delete all unhealthy kidneys
app.delete("/", (req, res) => {
  const healthyKidneys = users[0].kidneys.filter((kidney) => kidney.healthy);
  const unhealthyKidneys = users[0].kidneys.length - healthyKidneys.length;

  // Return 411 if there are no unhealthy kidneys
  if (unhealthyKidneys === 0) {
    res.statusCode = 411;
    res.json({
      msg: "You have no unhealthy kidneys.",
    });
    return;
  }
  users[0].kidneys = healthyKidneys;

  res.json({
    msg: "Done!",
  });
});

// TODO: Add validation logic
// App Listens on port 3000
app.listen(3000, () => {
  console.log("App is listening on 3000");
});
