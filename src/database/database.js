const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:charango@localhost:5432/proyectDB')
module.exports = {
  sequelize
}