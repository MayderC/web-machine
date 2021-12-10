const express = require('express');
const contactRoutes = require('./routes/contact.routes')
const {conexion} = require('./database/conexion')



const app = express()


app.use(express.json())



app.use('/contact', contactRoutes())


conexion()



module.exports = app