const express = require('express')
const router  = express.Router()
const {getRepos} = require('../controllers/github.controller')

module.exports = () =>{
  router.get('/', getRepos)


  

  return router
}