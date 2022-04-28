const app = require('./app')
const { sequelize } = require('./database/database')

// require('./models/project')
// require('./models/task')

const main = async () => {
  try {
    //Sinconizacion con la DB (crea tablas o elimina si existe y las vuelve a crear)
    // await sequelize.sync({ force: true })
    await sequelize.sync({force: false})
    await sequelize.authenticate()
    console.log('Connection has been established secessfully')
    app.listen(3000)
    console.log('Server is running')
  } catch (error) {
    console.log('Unable to connect to the database', error)
  }
}

main()