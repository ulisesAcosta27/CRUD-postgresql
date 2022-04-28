const { Task } = require("../models/task");

const getTask = async (req, res) => {
  try {
    const task = await Task.findAll();
    res.json(task);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const getOneTask = await Task.findOne({
      where: { id },
      //attributes: ['name', 'done']
    });
    res.json(getOneTask);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({ name, done, projectId });
    res.json(newTask);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
    });
    //busca el campo que se va a actualizar desde el body y s no exite lo agrega
    task.set(req.body)
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
};
