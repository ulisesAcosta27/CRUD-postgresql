const { Proyect } = require("../models/project");
const { Task } = require("../models/task");

const getProject = async (req, res, next) => {
  try {
    const project = await Proyect.findAll();
    res.json(project);
  } catch (err) {
    next(err)
  }
};

const getOneProyect = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getOneProyect = await Proyect.findOne({
      where: { id },
    });
    res.json(getOneProyect);
  } catch (err) {
    next(err)
  }
};

const createProject = async (req, res, next) => {
  try {
    const { name, priority, description } = req.body;
    const newProyect = await Proyect.create({ name, priority, description });
    res.json(newProyect);
  } catch (err) {
    next(err)
  }
};

const updateProject = async (req, res, next) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;
  try {
    const project = await Proyect.findByPk(id);

    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (err) {
    next(err)
  }
};

const deleteProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Proyect.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err)
  }
};

const getProjectTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Task.findAll({
      where: { projectId: id },
    });
    res.json(task)
  } catch (err) {
    next(err)
  }
};

module.exports = {
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getOneProyect,
  getProjectTask,
};
