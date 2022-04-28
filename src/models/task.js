const { sequelize } = require('../database/database')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('tasks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = {
  Task,
}