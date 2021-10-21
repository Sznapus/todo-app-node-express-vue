const bodyParser = require("body-parser");
const express = require("express");
const tasks = require("./routes/tasks");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(tasks);

app.listen(PORT, () =>
  console.log("Server running on port: http://localhost:3000")
);
