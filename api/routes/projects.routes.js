const {Router} = require('express')
const router = Router()


module.exports = () => {

  router.get('/',(req, res) => res.send("Holaaa"))


  return router

}
