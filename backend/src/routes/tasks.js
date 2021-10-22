// const express = require("express");
// const router = express.Router();

// router.get("/", function (req, res) {
//   res.send("I'm from tasks.js :)");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const createdTaskGet = require("../controllers/task/createdTaskGetController");
const createdTaskPost = require("../controllers/task/createdTaskPostController");

// GET request for creating task. NOTE This must come before route for id (i.e. display task).
router.get("/", createdTaskGet.task_create_get);

// POST request for creating task.
router.post("/", createdTaskPost.task_create_post);

// // GET request to delete task.
// router.get("/", taskController.task_delete_get);

// // POST request to delete task.
// router.post("/", taskController.task_delete_post);

// // GET request to update task.
// router.get("/", taskController.task_update_get);

// // POST request to update task.
// router.post("/", taskController.task_update_post);

// // GET request for one task.
// router.get("/", taskController.task_detail);

// // GET request for list of all tasks.
// router.get("/", taskController.task_list);

module.exports = router;
