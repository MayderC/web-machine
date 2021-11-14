const mongoose = require('mongoose');

const conexion = async() =>{

  try {
    
    await mongoose.connect('mongodb://localhost:27017/nuxweb');
    console.log('Conectado')
  } catch (error) {console.error(error)}


}


module.exports = {
  conexion
}



