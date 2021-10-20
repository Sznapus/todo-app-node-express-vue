const bodyParser = require("body-parser");
const express = require("express");
const tasks = require("./routes/tasks");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("./src/routes.tasks", tasks);

// app.get("/", function (req, res) {
//   res.send("dupa");
// });

app.listen(PORT, () =>
  console.log("Server running on port: http://localhost:3000")
);
