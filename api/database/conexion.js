const mongoose = require('mongoose');

const conexion = async() =>{

  try {
    
    await mongoose.connect(process.env.MONGO_CNN);
    console.log('Conectado')
  } catch (error) {console.error(error)}


}


module.exports = {
  conexion
}



