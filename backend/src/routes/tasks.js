// const express = require("express");
// const router = express.Router();

// router.get("/", function (req, res) {
//   res.send("dupa tasks");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Require controller modules.
const task_controller = require("../controllers/taskController");

/// Task ROUTES ///

// GET request for creating task. NOTE This must come before route for id (i.e. display task).
router.get("/task/create", task_controller.task_create_get);

// POST request for creating task.
router.post("/task/create", task_controller.task_create_post);

// GET request to delete task.
router.get("/task/:id/delete", task_controller.task_delete_get);

// POST request to delete task.
router.post("/task/:id/delete", task_controller.task_delete_post);

// GET request to update task.
router.get("/task/:id/update", task_controller.task_update_get);

// POST request to update task.
router.post("/task/:id/update", task_controller.task_update_post);

// GET request for one task.
router.get("/task/:id", task_controller.task_detail);

// GET request for list of all tasks.
router.get("/tasks", task_controller.task_list);

module.exports = router;
