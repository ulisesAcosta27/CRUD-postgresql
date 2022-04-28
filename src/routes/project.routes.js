const { Router } = require("express");
const {
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getOneProyect,
  getProjectTask,
} = require("../controllers/proyect.controller");
const { projectExist, userUndefined, userUnsearch } = require("../middleware/middleProject");
const router = Router();

router.get("/project", getProject);

router.get("/project/:id", userUnsearch, getOneProyect);

router.post("/project", projectExist, createProject);

router.put("/project/:id", userUndefined, updateProject);

router.delete("/project/:id", userUnsearch, deleteProject);

router.get("/project/:id/task", getProjectTask);

module.exports = router;
