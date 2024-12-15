const express = require("express");

const app = express();

// To extract body from the req
app.use(express.json());

app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  // Authentication : Check if the username and password is correct
  if (username != "ved" && password != "password") {
    res.statusCode = 403;
    res.json({
      msg: "User doesn't exists.",
    });
    return;
  }

  // Check if the request is having valid inputs
  if (kidneyId != 1 && kidneyId != 2) {
    res.statusCode = 411;
    res.json({
      msg: "Wrong Inputs.",
    });
    return;
  }

  // Finally send some response
  res.send("Your Kidneys are in good shape.");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
