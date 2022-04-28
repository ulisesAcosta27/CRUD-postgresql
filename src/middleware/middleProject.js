const { request } = require("express");
const { Proyect } = require("../models/project");

const projectExist = async (req = request, res, next) => {
  const { name } = req.body;
  const findProyect = await Proyect.findOne({
    where: { name },
  });
  // console.log('--------',findProyect, '--------')
  if (!findProyect || findProyect == null) {
    return next();
  }
  return res
    .status(400)
    .json({ msg: "the User that you are trying to create exist" });
};

const userUndefined = async (req = request, res, next) => {
  const { id } = req.params;
  const findProyect = await Proyect.findByPk(id);
  if (!findProyect || findProyect == null) {
    return res
      .status(400)
      .json({ msg: "The user that you are trying to update does not exist" });
  }
  next();
};

const userUnsearch = async (req = request, res, next) => {
  const { id } = req.params;
  const findProyect = await Proyect.findOne({
    where: { id },
  });
  if (!findProyect || findProyect == null) {
    return res
      .status(400)
      .json({ msg: "The user that you are trying to search does not exist" });
  }
  next();
};

const handleErrors = (err, req, res, next) => {
  return res.status(400).json({msg: err.message})
};

module.exports = {
  projectExist,
  userUndefined,
  userUnsearch,
  handleErrors
};
