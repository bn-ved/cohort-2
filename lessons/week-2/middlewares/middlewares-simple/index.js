const express = require("express");
const app = express();

// To extract body from the req
app.use(express.json());

// Rather calling the middlewares each time,
// We can ask express to use a particular middleware.
app.use(userAuthentication);
app.use(inputValidation);

function userAuthentication(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "ved" && password != "password") {
    res.statuCode = 403;
    res.json({
      msg: "User doesn't exists.",
    });
  } else {
    next();
  }
}

function inputValidation(req, res, next) {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2) {
    res.statusCode = 411;
    res.json({
      msg: "Wrong Inputs.",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", (req, res) => {
  res.send("Your kidney is healthy.");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
