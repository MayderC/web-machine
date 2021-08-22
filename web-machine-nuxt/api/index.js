const app = require('express')()
const post_routes = require('./routes/post.routes')

app.get('/', (req, res)=>{

  res.send({hola : "Hola main"})
})




app.use('/post', post_routes())




module.exports = app