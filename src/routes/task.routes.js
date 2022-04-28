const { Router } = require("express");

const {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
} = require("../controllers/task.controller");

const router = Router();

router.get("/task", getTask);

router.get("/task/:id", getOneTask);

router.post("/task", createTask);

router.put("/task/:id", updateTask);

router.delete("/task/:id", deleteTask);

module.exports = router;
