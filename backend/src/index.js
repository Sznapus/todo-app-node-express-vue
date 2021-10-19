const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("src/router/tasks.js", function (req, res) {
  res.send(req.params);
});

app.listen(PORT, () =>
  console.log("Server running on port: http://localhost:3000")
);
