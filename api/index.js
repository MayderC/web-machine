const express = require('express');
const contactRoutes = require('./routes/contact.routes')
const projecttRoutes = require('./routes/projects.routes')
const {conexion} = require('./database/conexion')
const cors = require('cors')


const app = express()


app.use(express.json())

app.use(cors())

app.use('/contact', contactRoutes())
app.use('/projects', projecttRoutes())

conexion()



module.exports = app