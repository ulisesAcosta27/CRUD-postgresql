const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
module.exports = {
  sequelize,
};
