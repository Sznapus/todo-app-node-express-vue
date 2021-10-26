const express = require("express");
const router = express.Router();

router.get("/", [], (...args) => indexControler.invoke(...args));
router.post("/tasks", [], (...args) => createControler.invoke(...args));

module.exports = router;
