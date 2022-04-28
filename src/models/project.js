const { sequelize } = require('../database/database')
const { DataTypes } = require('sequelize')
const { Task } = require('./task')

const Proyect = sequelize.define('proyects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      min: 3
    }
  },
  priority: {
    type: DataTypes.INTEGER,
    validate: {
      isInt: true,
      isNumeric: {
        msg: 'Mus be a number'
      }
    }
  },
  description: {
    type: DataTypes.STRING
  },
})

//Un proyecto tiene muchas tareas
Proyect.hasMany(Task, {
  //creo una nuevo columna donde sera la clave foranea
  foreignKey: 'projectId',
  //agarro la columna de donde se va a buscar la clave primary
  sourceKey: 'id'
})

//Muchas tareas pueden pertenecer a un proyecto
Task.belongsTo(Proyect, {
  foreignKey: 'projectId',
  targetId: 'id'
})

module.exports = {
  Proyect
}