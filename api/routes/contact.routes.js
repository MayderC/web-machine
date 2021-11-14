const express = require('express');
const router = express.Router();
const {contactSave, getAllContacts} = require('../controllers/contact.controller')

module.exports = () =>{

  router.post('/', contactSave)

  router.get('/', getAllContacts)

  return router
}