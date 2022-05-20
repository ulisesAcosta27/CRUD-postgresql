const express = require('express');
const morgan = require('morgan');
require('dotenv').config()

const projectRoutes = require('./routes/project.routes');
const taskRoutes = require('./routes/task.routes')
const { handleErrors } = require('./middleware/middleProject');


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use(projectRoutes)
app.use(taskRoutes)
app.use(handleErrors);

module.exports = app;