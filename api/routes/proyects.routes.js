const express = require('express')
const router  = express.Router()
const {getAllPosts} = require('../controllers/post.controller')

module.exports = () =>{

  console.log("rutass")

  router.get('/:id', getAllPosts)


  return router
}